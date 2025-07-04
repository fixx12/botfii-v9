const axios = require("axios");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

let handler = async (m, { Ditss, text, prefix, command }) => {
  if (!text) {
    return m.reply(`*• Example :* ${prefix + command} *[input text]*`);
  }
  try {
    Ditss.sendMessage(m.chat, {
            react: {
                text: '⏳',
                key: m.key
            }
        });
    const words = text.split(" ");
    const tempDir = path.join(process.cwd(), "tmp");
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const framePaths = [];

    for (let i = 0; i < words.length; i++) {
      const currentText = words.slice(0, i + 1).join(" ");

      const res = await axios
        .get(
          `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
          {
            responseType: "arraybuffer",
          },
        )
        .catch((e) => e.response);

      const framePath = path.join(tempDir, `frame${i}.mp4`);
      fs.writeFileSync(framePath, res.data);
      framePaths.push(framePath);
    }

    const fileListPath = path.join(tempDir, "filelist.txt");
    let fileListContent = "";

    for (let i = 0; i < framePaths.length; i++) {
      fileListContent += `file '${framePaths[i]}'\n`;
      fileListContent += `duration 0.5\n`; // Durasi setiap frame 500 milidetik
    }

    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
    fileListContent += `duration 3\n`; // Frame terakhir memiliki durasi 3 detik

    fs.writeFileSync(fileListPath, fileListContent);

    const outputVideoPath = path.join(tempDir, "output.mp4");
    execSync(
      `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`,
    );
    Ditss.sendMessage(m.chat, {
            react: {
                text: '🎉',
                key: m.key
            }
        });
    Ditss.sendAsSticker(m.chat, outputVideoPath, m, {
      packname: "asuma multi device",
      author: "Ditss",
    });

    framePaths.forEach((filePath) => fs.unlinkSync(filePath));
    fs.unlinkSync(fileListPath);
    fs.unlinkSync(outputVideoPath);
  } catch (err) {
    console.error(err);
    m.reply("Maaf, terjadi kesalahan saat memproses permintaan.");
  }
};


handler.command = ["bratgen"];

module.exports = handler;
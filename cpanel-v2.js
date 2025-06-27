const fs = require("fs");

let handler = async (m, { Ditss, isCreator, isPremium, text, Reply, example }) => {
  if (!isCreator && !isPremium) return Reply(global.mess.owner);
  if (!text) return m.reply(example("username"));

  let teksHeader = `
${ki}乂 list ram server panell yang tersedia. 乂${ki}`;

  let buttons = [
    {
      buttonId: "action",
      buttonText: { displayText: "Pesan RAM Anda" },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "click here",
          sections: [
            {
              title: "𝗣𝗶𝗹𝗶𝗵 𝗦𝗲𝘀𝘂𝗮𝗶 𝗞𝗲𝗯𝘂𝘁𝘂𝗵𝗮𝗻 𝗔𝗻𝗱𝗮",
              rows: [
                { title: "RAM 1GB CPU 30%", description: `🐣 Username Panel: ${text}`, id: `.1gb-v2 ${text}` },
                { title: "RAM 2GB CPU 60%", description: `🐥 Username Panel: ${text}`, id: `.2gb-v2 ${text}` },
                { title: "RAM 3GB CPU 90%", description: `🐣 Username Panel: ${text}`, id: `.3gb-v2 ${text}` },
                { title: "RAM 4GB CPU 120%", description: `🐥 Username Panel: ${text}`, id: `.4gb-v2 ${text}` },
                { title: "RAM 5GB CPU 150%", description: `🐣 Username Panel: ${text}`, id: `.5gb-v2 ${text}` },
                { title: "RAM 6GB CPU 180%", description: `🐥 Username Panel: ${text}`, id: `.6gb-v2 ${text}` },
                { title: "RAM 7GB CPU 210%", description: `🐣 Username Panel: ${text}`, id: `.7gb-v2 ${text}` },
                { title: "RAM 8GB CPU 240%", description: `🐥 Username Panel: ${text}`, id: `.8gb-v2 ${text}` },
                { title: "RAM 9GB CPU 260%", description: `🐣 Username Panel: ${text}`, id: `.9gb-v2 ${text}` },
                { title: "RAM 10GB CPU 270%", description: `🐥 Username Panel: ${text}`, id: `.10gb-v2 ${text}` },
                { title: "RAM UNLIMITED CPU UNLIMITED", description: `🐣 Username Panel: ${text}`, id: `.unli-v2 ${text}` },
              ],
            },
          ],
        }),
      },
    },
  ];

  Ditss.sendMessage(
    m.chat,
    {
      text: teksHeader,
      footer: `© powered by ${namaOwner}`,
      buttons,
      headerType: 1,
      viewOnce: true,
    },
    { quoted: m }
  );
};

handler.command = ["cpanel-v2", "cpanel2"];

module.exports = handler
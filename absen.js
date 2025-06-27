const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng}) => {
`${ditsganteng}`
let teksnya = `
*\`乂 ABSEN M E N U 乂\`*
> ┌  ◦ *mulaiabsen* : 
> └  ◦ *absen* :
> ┌  ◦ *cekabsen* : 
> └  ◦ *hapusabsen* :
note cara penggunaan ketik dulu .mulaiabsen lalu ketik .absen
jika sudah absen semua ketik hapusabsen
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `powered by asuma`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./source/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
   Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/awal.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })

      
}

handler.command = ["absenmenu", "menuabsen", "asuma-absen"]

module.exports = handler
const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng}) => {
`${ditsganteng}`
let teksnya = `
*\`乂 R P G - M E N U 乂\`*

> ┌  ◦ *${ki}fitur rpg coming soon${ka}* : 
> └  ◦ *${ki}∆${ka}* :

`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./asuma-Ditss.js"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./source/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/musikk/main/randomm.json');

let itil = pler[Math.floor(Math.random() * pler.length)];
await Ditss.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })}

handler.command = ["menurpg", "rpgmenu", "asuma-rpg"]

module.exports = handler
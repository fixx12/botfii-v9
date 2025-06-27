const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, sleep}) => {
var arr = [
"`🌑 🌘`",
"`🌘 🌗`",
"`🌗 🌖`",
"`🌖 🌕`",
"`🌕 🌖`",
"`🌖 🌗`",
"`🌗 🌘`",
"`🌘 🌑`",
"🐣"
]
let load = await Ditss.sendMessage(m.chat, {text: '🐣'},{quoted:m})
for (let i = 0; i < arr.length; i++) {
await sleep(100)
await Ditss.sendMessage(m.chat, {text: arr[i], edit: load.key },{quoted:null});
}
`${ditsganteng}`
let teksnya = `
*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *saldo :* Rp ${asumaSaldo}
> • *device:* \`${m.device}\`

「 *S U B ∆ M E N U* 」
> ┌  ◦ *aimenu* : 
> └  ◦ *groupmenu* :
> ┌  ◦ *gamemenu* : 
> └  ◦ *rpgmenu* :
> ┌  ◦ *downloadmenu* : 
> └  ◦ *searchmenu* :
> ┌  ◦ *toolsmenu* : 
> └  ◦ *mainmenu* :
> ┌  ◦ *ownermenu* : 
> └  ◦ *absenmenu* :
> ┌  ◦ *cerpenmenu* : 
> └  ◦ *beritamenu* :
> ┌  ◦ *pterodactyl* : 
> └  ◦ *pterodactyl2* :
> ┌  ◦ *soundmenu* : 
> └  ◦ *-* :
╰──────────────━

`
//await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
Ditss.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: fs.readFileSync("./source/media/menu.jpg"),
    fileName: `asuma multi device`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: teksnya,
    contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./source/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
//Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/awal.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })
//Ditss.sendMessage(m.chat, { audio: {url: dits }, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })
      
}

handler.command = ["manii"]

module.exports = handler
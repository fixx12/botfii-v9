const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng}) => {
`${ditsganteng}`
let teksnya = `
*\`乂 CPANEL M E N U 乂\`*

> ┌  ◦ *${ki}panelmenu2${ka}* : 
> └  ◦ *${ki}listadmin${ka}* :
> ┌  ◦ *${ki}listpanel${ka}* : 
> └  ◦ *${ki}deladmin${ka}* :
> ┌  ◦ *${ki}delpanel${ka}* : 
> └  ◦ *${ki}cadmin${ka}* :
> ┌  ◦ *${ki}1gb${ka}* : 
> └  ◦ *${ki}2gb${ka}* :
> ┌  ◦ *${ki}3gb${ka}* : 
> └  ◦ *${ki}4gb${ka}* :
> ┌  ◦ *${ki}5gb${ka}* : 
> └  ◦ *${ki}6gb${ka}* :
> ┌  ◦ *${ki}7gb${ka}* : 
> └  ◦ *${ki}8gb${ka}* :
> ┌  ◦ *${ki}9gb${ka}* : 
> └  ◦ *${ki}unlimited${ka}* :
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./source/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
   Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/awal.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })

      
}

handler.command = ["pterodactyl", "panelmenu", "menupanel"]

module.exports = handler
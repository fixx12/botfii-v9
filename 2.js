const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng}) => {
`${ditsganteng}`
let teksnya = `
*\`乂 CPANEL M E N U 乂\`*

> ┌  ◦ *${ki}panelmenu${ka}* : 
> └  ◦ *${ki}listadmin-v2${ka}* :
> ┌  ◦ *${ki}listpanel-v2${ka}* : 
> └  ◦ *${ki}deladmin-v2${ka}* :
> ┌  ◦ *${ki}delpanel-v2${ka}* : 
> └  ◦ *${ki}cadmin-v2${ka}* :
> ┌  ◦ *${ki}1gb-v2${ka}* : 
> └  ◦ *${ki}2gb-v2${ka}* :
> ┌  ◦ *${ki}3gb-v2${ka}* : 
> └  ◦ *${ki}4gb-v2${ka}* :
> ┌  ◦ *${ki}5gb-v2${ka}* : 
> └  ◦ *${ki}6gb-v2${ka}* :
> ┌  ◦ *${ki}7gb-v2${ka}* : 
> └  ◦ *${ki}8gb-v2${ka}* :
> ┌  ◦ *${ki}9gb-v2${ka}* : 
> └  ◦ *${ki}unlimited-v2${ka}* :
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `cpanel sever privat`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./source/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
   Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/awal.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })

      
}

handler.command = ["pterodactyl2", "panelmenu2", "menupanel2"]

module.exports = handler
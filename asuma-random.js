const fs = require("fs")
const os = require('os');

//let handler = async (m, { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, replyAi }) => {
//let totalreg = Object.keys(db.list().user).length
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, readmore, fetchJson, salam }) => {

const asumaByDits = `
*\`乂 PHOTO - M E N U 乂\`*
> ┌  ◦ *${ki}${prefix}hijab${ka}* :
> └  ◦ *${ki}${prefix}indo${ka}* :
> ┌  ◦ *${ki}${prefix}confess *nomor|nama|pesan*${ka}* :
> └  ◦ *${ki}${prefix}menfess *nomor|nama|pesan*${ka}* :
> ┌  ◦ *${ki}${prefix}japanese${ka}* :
> └  ◦ *${ki}${prefix}korean${ka}* :
> ┌  ◦ *${ki}${prefix}malay${ka}* :
> └  ◦ *${ki}${prefix}randomgirl${ka}* :
> ┌  ◦ *${ki}${prefix}randomboy${ka}* :
> └  ◦ *${ki}${prefix}thai${ka}* :
> ┌  ◦ *${ki}${prefix}vietnamese${ka}* :
> └  ◦ *${ki}${prefix}aesthetic${ka}* :
> ┌  ◦ *${ki}${prefix}chinese${ka}* :
> └  ◦ *${ki}${prefix}pubg${ka}* :
> ┌  ◦ *${ki}${prefix}antiwork${ka}* :
> └  ◦ *${ki}${prefix}blackpink2${ka}* :
> ┌  ◦ *${ki}${prefix}cosplay${ka}* :
> └  ◦ *${ki}${prefix}cat${ka}* :
> ┌  ◦ *${ki}${prefix}doggo${ka}* :
> └  ◦ *${ki}${prefix}justina${ka}* :
> ┌  ◦ *${ki}${prefix}kayes${ka}* :
> └  ◦ *${ki}${prefix}bike${ka}* :
> ┌  ◦ *${ki}${prefix}boneka${ka}* :
> └  ◦ *${ki}${prefix}kpop${ka}* :
> ┌  ◦ *${ki}${prefix}notnot${ka}* :
> └  ◦ *${ki}${prefix}car${ka}* :
> ┌  ◦ *${ki}${prefix}rose${ka}* :
> └  ◦ *${ki}${prefix}ryujin${ka}* :
> ┌  ◦ *${ki}${prefix}ulzangboy
> └  ◦ *${ki}${prefix}ulzanggirl${ka}* :
> ┌  ◦ *${ki}${prefix}mobilelegend${ka}* :
`

const resize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 let jimp = require('jimp')
 var baper = await jimp.read(buffer);
 var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
 })
}

/*let deku = fs.readFileSync('./source/media/menu.jpg')
let get = await resize(deku, 100, 100)
await Ditss.sendMessage(m.chat, {
 document: fs.readFileSync('./case.js'), fileName: `${botname} ${versi}`, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get,*/
Ditss.sendMessage(m?.chat, {
    document: fs.readFileSync("./asuma-Ditss.js"),
    jpegThumbnail: fs.readFileSync("./source/media/menu.jpg"),
    fileName: `${global.botname} ${global.versi}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//bts
 caption: asumaByDits,
 footer: `powered by ${global.namaOwner2}`,
 buttons: [
 {
 buttonId: ".botjelek", 
 buttonText: {
 displayText: 'back menu awal'
 }
 }, {
 buttonId: ".inpoebot", 
 buttonText: {
 displayText: "info bot"
 }
 }
],
 viewOnce: true,
 headerType: 6,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: `${global.namaOwner2} | ${global.botname}`,
 mediaType: 1,
 previewType: 1,
 body: `® Ditss`,
 //previewType: "PHOTO",
 thumbnail: fs.readFileSync('./source/media/menuowner.jpg'),
 renderLargerThumbnail: true,
 mediaUrl: global.linkGrup,
 sourceUrl: global.linkGrup,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: ${namaOwner}`,
 }
 }
}, { quoted: qkontak });

//await m.reply({ audio: { url: 'https://files.catbox.moe/s7avpq.mp3' }, mimetype: 'audio/mpeg', ptt: true })
}


handler.command = ["randomphoto", "photomenu", "asuma-photo",]

module.exports = handler
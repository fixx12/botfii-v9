const fs = require("fs")
const os = require('os');

//let handler = async (m, { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, replyAi }) => {
//let totalreg = Object.keys(db.list().user).length
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, readmore, fetchJson, salam }) => {

const asumaByDits = `
*\`乂 ASUPAN - M E N U 乂\`*
> ┌  ◦ *${ki}${prefix}asupan1-20${ka}* :
> └  ◦ *${ki}${prefix}tiktokgirl${ka}* :
> ┌  ◦ *${ki}${prefix}tiktoknukthy${ka}* :
> └  ◦ *${ki}${prefix}tiktokkayes${ka}* :
> ┌  ◦ *${ki}${prefix}tiktokpanrika${ka}* :
> └  ◦ *${ki}${prefix}tiktoknotnot${ka}* :
> ┌  ◦ *${ki}${prefix}tiktokghea${ka}* :
> └  ◦ *${ki}${prefix}tiktoksantuy${ka}* :
> ┌  ◦ *${ki}${prefix}tiktokbocil${ka}* :
> └  ◦ *${ki}${prefix}bokep1/27${ka}* :`

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
    fileName: `${salam} ${m.pushName}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//bts
 caption: asumaByDits,
 footer: `\npowered by ${global.namaOwner2}`,
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
 title: `${global.namaOwner} | ${global.botname2}`,
 mediaType: 1,
 previewType: 1,
 body: `®Ditss`,
 //previewType: "PHOTO",
 thumbnail: fs.readFileSync('./source/media/menuowner.jpg'),
 renderLargerThumbnail: true,
 mediaUrl: global.linkGrup,
 sourceUrl: global.linkGrup,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: ${global.namaOwner}`,
 }
 }
}, { quoted: qkontak });
let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/musikk/main/randomm.json');

let itil = pler[Math.floor(Math.random() * pler.length)];
await Ditss.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })}


handler.command = ["asupanmenu", "menuasupan", "asuma-asupan"]

module.exports = handler
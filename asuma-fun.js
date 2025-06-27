const fs = require("fs")
const os = require('os');

//let handler = async (m, { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, replyAi }) => {
//let totalreg = Object.keys(db.list().user).length
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, readmore, fetchJson, salam }) => {

const asumaByDits = `*\`乂 FUN - M E N U 乂\`*
> ┌  ◦ *${ki}cekkontol${ki}* :
> └  ◦ *${ki}cekganteng${ki}* :
> ┌  ◦ *${ki}cekcantik${ki}* :
> └  ◦ *${ki}cekmemek${ki}* : 
> ┌  ◦ *${ki}cekkhodam${ki}* : 
> └  ◦ *${ki}checkme${ki}* : 
> ┌  ◦ *${ki}kontol${ki}* :
> └  ◦ *${ki}cabul${ki}* : 
> ┌  ◦ *${ki}tolol${ki}* : 
> └  ◦ *${ki}sunda${ki}* :
> ┌  ◦ *${ki}goblog/goblok${ki}* : 
> └  ◦ *${ki}idiot${ki}* : 
> ┌  ◦ *${ki}gay${ki}* :
> └  ◦ *${ki}jomok${ki}* : 
> ┌  ◦ *${ki}bajingan${ki}* : 
> └  ◦ *${ki}munafik${ki}* :
> ┌  ◦ *${ki}kontol${ki}* :
> └  ◦ *${ki}yatim${ki}* : 
> ┌  ◦ *${ki}poke${ki}* : 
> └  ◦ *${ki}pembokep${ki}* : 
> ┌  ◦ *${ki}fembokef${ki}* :
> └  ◦ *${ki}pengocok${ki}* :
> ┌  ◦ *${ki}hitam${ki}* :
> └  ◦ *${ki}hytam${ki}* : 
> ┌  ◦ *${ki}bego${ki}* : 
> └  ◦ *${ki}jawa${ki}* : 
> ┌  ◦ *${ki}wibu${ki}* : 
> └  ◦ *${ki}stress${ki}* :
> ┌  ◦ *${ki}miskin${ki}* : 
> └  ◦ *${ki}cantik${ki}* : 
> ┌  ◦ *${ki}ganteng${ki}* :
> └  ◦ *${ki}setan${ki}* :
> ┌  ◦ *${ki}manis${ki}* :
> └  ◦ *${ki}babi${ki}* : 
> ┌  ◦ *${ki}cina${ki}* : 
> └  ◦ *${ki}atheis${ki}* : 
> ┌  ◦ *${ki}papua${ki}* :
> └  ◦ *${ki}pengentot${ki}* : 
> ┌  ◦ *${ki}seksi${ki}* : 
> └  ◦ *${ki}kawai${ki}* : 
> ┌  ◦ *${ki}tercindo${ki}* : 
> └  ◦ *${ki}cabul${ki}* :
> ┌  ◦ *${ki}fuckboy${ki}* : 
> └  ◦ *${ki}fuckgirl${ki}* :
> ┌  ◦ *${ki}playboy${ki}* : 
> └  ◦ *${ki}playgirl${ki}* :
> ┌  ◦ *${ki}sange${ki}* :
> └  ◦ *${ki}hot${ki}* :
> ┌  ◦ *${ki}sangean${ki}* : `

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
    fileName: `asuma multi device`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//bts
 caption: asumaByDits,
 footer: `powered by ${namaOwner}`,
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
 title: `${namaOwner} | ${botname}`,
 mediaType: 1,
 previewType: 1,
 body: `® Ditss`,
 //previewType: "PHOTO",
 thumbnail: fs.readFileSync('./source/media/menuowner.jpg'),
 renderLargerThumbnail: true,
 mediaUrl: linkGrup,
 sourceUrl: linkGrup,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: ${namaOwner}`,
 }
 }
}, { quoted: qkontak });
let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/musikk/main/randomm.json');

let itil = pler[Math.floor(Math.random() * pler.length)];
await Ditss.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 1000000}, { quoted: qkontak })}


handler.command = ["menufun", "funmenu", "asuma-fun"]

module.exports = handler
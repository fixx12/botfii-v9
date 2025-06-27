const fs = require("fs")
const os = require('os');

//let handler = async (m, { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, replyAi }) => {
//let totalreg = Object.keys(db.list().user).length
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, readmore, fetchJson, salam }) => {

const asumaByDits = `
*\`乂 ANIME - M E N U 乂\`*
> ┌  ◦ *${ki}${prefix}cogan${ka}* :
> └  ◦ *${ki}${prefix}elaina2${ka}* :
> ┌  ◦ *${ki}${prefix}exo${ka}* :
> └  ◦ *${ki}${prefix}elf${ka}* :
> ┌  ◦ *${ki}${prefix}estetic${ka}* :
> └  ◦ *${ki}${prefix}kanna${ka}* :
> ┌  ◦ *${ki}${prefix}loli${ka}* :
> └  ◦ *${ki}${prefix}shota${ka}* :
> ┌  ◦ *${ki}${prefix}husbu${ka}* :
> └  ◦ *${ki}${prefix}sagiri${ka}* :
> ┌  ◦ *${ki}${prefix}shinobu${ka}* :
> └  ◦ *${ki}${prefix}megumin${ka}* :
> ┌  ◦ *${ki}${prefix}wallnime${ka}* :
> └  ◦ *${ki}${prefix}neko${ka}* :
> ┌  ◦ *${ki}${prefix}waifu${ka}* :
> └  ◦ *${ki}${prefix}kill${ka}* :
> ┌  ◦ *${ki}${prefix}pat${ka}* :
> └  ◦ *${ki}${prefix}lick${ka}* :
> ┌  ◦ *${ki}${prefix}bite${ka}* :
> └  ◦ *${ki}${prefix}yeet${ka}* :
> ┌  ◦ *${ki}${prefix}bonk${ka}* :
> └  ◦ *${ki}${prefix}wink${ka}* :
> ┌  ◦ *${ki}${prefix}poke${ka}* :
> └  ◦ *${ki}${prefix}nom${ka}* :
> ┌  ◦ *${ki}${prefix}slap${ka}* :
> └  ◦ *${ki}${prefix}smile${ka}* :
> ┌  ◦ *${ki}${prefix}wave${ka}* :
> └  ◦ *${ki}${prefix}blush${ka}* :
> ┌  ◦ *${ki}${prefix}smug${ka}* :
> └  ◦ *${ki}${prefix}glomp${ka}* :
> ┌  ◦ *${ki}${prefix}happy${ka}* :
> └  ◦ *${ki}${prefix}dance${ka}* :
> ┌  ◦ *${ki}${prefix}cringe${ka}* :
> └  ◦ *${ki}${prefix}highfive${ka}* :
> ┌  ◦ *${ki}${prefix}handhold${ka}* :
> └  ◦ *${ki}${prefix}akira${ka}* :
> ┌  ◦ *${ki}${prefix}akiyama${ka}* :
> └  ◦ *${ki}${prefix}ana${ka}* :
> ┌  ◦ *${ki}${prefix}asuna${ka}* :
> └  ◦ *${ki}${prefix}ayuzawa${ka}* :
> ┌  ◦ *${ki}${prefix}boruto${ka}* :
> └  ◦ *${ki}${prefix}chiho${ka}* :
> ┌  ◦ *${ki}${prefix}chitoge${ka}* :
> └  ◦ *${ki}${prefix}cosplayloli${ka}* :
> ┌  ◦ *${ki}${prefix}cosplaysagiri${ka}* :
> └  ◦ *${ki}${prefix}deidara${ka}* :
> ┌  ◦ *${ki}${prefix}doraemon${ka}* :
> └  ◦ *${ki}${prefix}elena${ka}* :
> ┌  ◦ *${ki}${prefix}emilia${ka}* :
> └  ◦ *${ki}${prefix}erza${ka}* :
> ┌  ◦ *${ki}${prefix}gremory${ka}* :
> └  ◦ *${ki}${prefix}hestia${ka}* :
> ┌  ◦ *${ki}${prefix}hinata${ka}* :
> └  ◦ *${ki}${prefix}husbu${ka}* :
> ┌  ◦ *${ki}${prefix}inori${ka}* :
> └  ◦ *${ki}${prefix}isuzu${ka}* :
> ┌  ◦ *${ki}${prefix}itachi${ka}* :
> └  ◦ *${ki}${prefix}itori${ka}* :
> ┌  ◦ *${ki}${prefix}kaga${ka}* :
> └  ◦ *${ki}${prefix}kagura${ka}* :
> ┌  ◦ *${ki}${prefix}kakasih${ka}* :
> └  ◦ *${ki}${prefix}kaori${ka}* :
> ┌  ◦ *${ki}${prefix}keneki${ka}* :
> └  ◦ *${ki}${prefix}kotori${ka}* :
> ┌  ◦ *${ki}${prefix}kurumi${ka}* :
> └  ◦ *${ki}${prefix}loli${ka}* :
> ┌  ◦ *${ki}${prefix}madara${ka}* :
> └  ◦ *${ki}${prefix}megumin${ka}* :
> ┌  ◦ *${ki}${prefix}mikasa${ka}* :
> └  ◦ *${ki}${prefix}mikey${ka}* :
> ┌  ◦ *${ki}${prefix}miku${ka}* :
> └  ◦ *${ki}${prefix}minato${ka}* :
> ┌  ◦ *${ki}${prefix}naruto${ka}* :
> └  ◦ *${ki}${prefix}neko${ka}* :
> ┌  ◦ *${ki}${prefix}neko2${ka}* :
> └  ◦ *${ki}${prefix}nekonime${ka}* :
> ┌  ◦ *${ki}${prefix}nezuko${ka}* :
> └  ◦ *${ki}${prefix}onepiece${ka}* :
> ┌  ◦ *${ki}${prefix}pokemon${ka}* :
> └  ◦ *${ki}${prefix}randomnime${ka}* :
> ┌  ◦ *${ki}${prefix}randomnime2${ka}* :
> └  ◦ *${ki}${prefix}rize${ka}* :
> ┌  ◦ *${ki}${prefix}sagiri${ka}* :
> └  ◦ *${ki}${prefix}sakura${ka}* :
> ┌  ◦ *${ki}${prefix}sasuke${ka}* :
> └  ◦ *${ki}${prefix}shina${ka}* :
> ┌  ◦ *${ki}${prefix}shinka${ka}* :
> └  ◦ *${ki}${prefix}shinomiya${ka}* :
> ┌  ◦ *${ki}${prefix}shizuka${ka}* :
> └  ◦ *${ki}${prefix}shota${ka}* :
> ┌  ◦ *${ki}${prefix}tejina${ka}* :
> └  ◦ *${ki}${prefix}toukachan${ka}* :
> ┌  ◦ *${ki}${prefix}tsunade${ka}* :
> └  ◦ *${ki}${prefix}waifu${ka}* :
> ┌  ◦ *${ki}${prefix}animewall${ka}* :
> └  ◦ *${ki}${prefix}yotsuba${ka}* :
> ┌  ◦ *${ki}${prefix}yuki${ka}* :
> └  ◦ *${ki}${prefix}yulibocil${ka}* :
> ┌  ◦ *${ki}${prefix}yumeko${ka}* :
> └  ◦ *${ki}${prefix}8ball${ka}* :
> ┌  ◦ *${ki}${prefix}tickle${ka}* :
> └  ◦ *${ki}${prefix}gecg${ka}* :
> ┌  ◦ *${ki}${prefix}feed${ka}* :
> └  ◦ *${ki}${prefix}.${ka}* :`

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
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: fs.readFileSync("./source/media/menu.jpg"),
    fileName: `${global.botname2}`,
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
 title: `${global.namaOwner} | ${global.botname}`,
 mediaType: 1,
 previewType: 1,
 body: `${salam} ${m.pushName}`,
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
let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/musikk/main/randomm.json');

let itil = pler[Math.floor(Math.random() * pler.length)];
await Ditss.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })}


handler.command = ["animemenu", "menuanime", "asuma-anime"]

module.exports = handler
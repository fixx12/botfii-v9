const fs = require("fs")
const os = require('os');

//let handler = async (m, { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, replyAi }) => {
//let totalreg = Object.keys(db.list().user).length
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, readmore, fetchJson, salam }) => {

const asumaByDits = `*\`乂 CERPEN M E N U 乂\`*
> ┌  ◦ *${ki}cerpen ᴀɴᴀᴋ${ka}* :
> └  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ${ka}* :
> ┌  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ${ka}* :
> └  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ${ka}* :
> └  ◦ *${ki}cerpen ʙᴜᴅᴀʏᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀꜱᴇᴅɪʜ${ka}* :
> └  ◦ *${ki}cerpen ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ${ka}* :
> └  ◦ *${ki}cerpen ɢᴀʟᴀᴜ${ka}* :
> ┌  ◦ *${ki}cerpen ɢᴏᴋɪʟ${ka}* :
> └  ◦ *${ki}cerpen ɪɴꜱᴘɪʀᴀꜱɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴊᴇᴘᴀɴɢ${ka}* :
> └  ◦ *${ki}cerpen ᴋᴇʜɪᴅᴜᴘᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴋᴇʟᴜᴀʀɢᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴋɪꜱᴀʜɴʏᴀᴛᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴋᴏʀᴇᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴋʀɪꜱᴛᴇɴ${ka}* :
> ┌  ◦ *${ki}cerpen ʟɪʙᴜʀᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴍᴀʟᴀʏꜱɪᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴍɪꜱᴛᴇʀɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴍᴏᴛɪᴠᴀꜱɪ${ka}* :
> └  ◦ *${ki}cerpen ɴᴀꜱɪʜᴀᴛ${ka}* :
> ┌  ◦ *${ki}cerpen ᴏʟᴀʜʀᴀɢᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴀᴛᴀʜʜᴀᴛɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇɴᴀɴᴛɪᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇɴᴅɪᴅɪᴋᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇɴɢᴀʟᴀᴍᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇɴɢᴏʀʙᴀɴᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇɴʏᴇꜱᴀʟᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇʀᴊᴜᴀɴɢᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇʀᴘɪꜱᴀʜᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ʀᴀᴍᴀᴅʜᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ʀᴇᴍᴀᴊᴀ${ka}* :
> └  ◦ *${ki}cerpen ʀɪɴᴅᴜ${ka}* :
> ┌  ◦ *${ki}cerpen ʀᴏʜᴀɴɪ${ka}* :
> └  ◦ *${ki}cerpen ʀᴏᴍᴀɴᴛɪꜱ${ka}* :
> ┌  ◦ *${ki}cerpen ꜱᴀꜱᴛʀᴀ${ka}* :
> └  ◦ *${ki}cerpen ꜱᴇᴅɪʜ${ka}* :
> ┌  ◦ *${ki}cerpen ꜱᴇᴊᴀʀᴀʜ${ka}* :`

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
 footer: `powered by`,
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
await Ditss.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })}


handler.command = ["menucerpen", "cerpenmenu",]

module.exports = handler
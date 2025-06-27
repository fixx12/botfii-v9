const fs = require("fs")
const os = require('os');
const axios = require('axios');
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, example, qkontak, asumaSaldo, ppuser, pickRandom, readmore,fetchJson, prefix, sleep, makeid, text}) => {
if (!text) return m.reply(example('teksnya kntol'))
let warna = ["#000000", "#ffffff"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]

const json = {
 "type": "quote",
 "format": "png",
 "backgroundColor": reswarna,
 "width": 512,
 "height": 768,
 "scale": 2,
 "messages": [
 {
 "entities": [],
 "avatar": true,
 "from": {
 "id": 1,
 "name": m.pushName,
 "photo": {
 "url": ppuser
 }
 },
 "text": text,
 "replyMessage": {}
 }
 ]
};
 const response = axios.post('https://bot.lyo.su/quote/generate', json, {
 headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
 const buffer = Buffer.from(res.data.result.image, 'base64')
 let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
//await Ditss.sendStimg(m.chat, tempnya, m, {packname: author})
await Ditss.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
fs.unlinkSync(`./${tempnya}`)
})
})
}
handler.command = ["qc", "qc22"]

module.exports = handler
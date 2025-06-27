const fs = require("fs")

let handler = async (m, { Ditss, text, example, Reply, qmsg, qlocJpm, mime, isCreator, sleep }) => {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Ditss.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Ditss.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses pengiriman *testimoni* ke dalam channel & ${res.length} grup chat`)
await Ditss.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Ditss.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Ditss.sendMessage(jid, {text: `Berhasil mengirim *testimoni* ke dalam channel & ${count} grup chat`}, {quoted: m})
}

handler.command = ["sendtesti", "testi"]

module.exports = handler
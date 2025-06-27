let handler = async (m, { Ditss, isCreator, example, Reply, text }) => {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await Ditss.updateBlockStatus(mem, "block");
if (m.isGroup) Ditss.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}

handler.command = ["block", "blokir", "blok"]

module.exports = handler
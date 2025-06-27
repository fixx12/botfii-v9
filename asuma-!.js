const fs = require("fs")
const os = require('os');
function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, Reply}) => {
 if (m.isGroup) return m.reply('*`maybee`harap pembelian di private chat*')
`${ditsganteng}`
let u = ``
let list1 = `• *${monospa('Paket [ 1 ]')}* 📦

> _RAM 4 GB_
> _DIKS 4190_
> _CPU 350%_
> _4K BULAN_`
let list2 = `• *${monospa('Paket [ 2 ]')}* 📦

> _RAM 5 GB_
> _DIKS 5190_
> _CPU 450%_
> _5K BULAN_`
let list3 = `• *${monospa('Paket [ 3 ]')}* 📦

> _RAM 6 GB_
> _DIKS 6190_
> _CPU 550%_
> _6K BULAN_`
let list4 = `• *${monospa('Paket [ 4 ]')}* 📦

> _RAM 7 GB_
> _DIKS 7190_
> _CPU 650%_
> _7K BULAN_ `
let list5 = `• *${monospa('Paket [ 5 ]')}* 📦

> _RAM 8 GB_
> _DIKS 8190_
> _CPU ∞%_
> _9K BULAN_`
let list6 = `• *${monospa('Paket [ 6 ]')}* 📦

> _RAM 9 GB_
> _DIKS O190_
> _CPU ∞%_
> _10K BULAN_`
let list7 = `• *${monospa('Paket [ 7 ]')}* 📦

> _RAM ∞ GB_
> _DIKS ∞_
> _CPU ∞%_
> _12K BULAN_`
let mmm = `
╰◈ Ram Vps : 16gb
╰◈ Core Vps : 4
╰◈ Garansi : 30 Day
╰◈ Terawat : ✓
╰◈ Anti Maling : ✓
╰◈ atmin cuma gw sendiri`
let info = `${monospace(mmm)}`


 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '0@newsletter',
			newsletterName: 'asuma the panel', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'asuma -CMD', 
 thumbnailUrl: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg', 
 sourceUrl: 'https://tiktok.com/@paadit',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: 'List Panel',
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n${list1}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: "Buy 4gb...🐣",
 id: ".bayar4gb"
 }),
}
 ]
 })
 },
 // BATAS CLONE KODE
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n${list2}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy 5gb...`,
 id: `.bayar5gb`
 }),
}
 ]
 })
 },
 // BATAS CLONE KODE
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n${list3}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy 6gb...🐣`,
 id: `.bayar6gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n${list4}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy 7gb...🐣`,
 id: `.bayar7gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n${list5}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy 9gb...🐣`,
 id: `.bayar8gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n${list6}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy 9gb..🐣`,

 id: `.bayar9gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n${list7}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy unlimited..🐣`,
 id: `.bayarunli`
 }),
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: m })
Ditss.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}

handler.command = ["panel", "ramlist"]

module.exports = handler
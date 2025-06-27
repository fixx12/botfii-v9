let moment = require('moment-timezone')
let PhoneNum = require('awesome-phonenumber')

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

let handler = async (m, { Ditss, text, prefix, command: cmd }) => {
	let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	if (!num) return m.reply(m.chat, `• *Example :* ${prefix + cmd} @tag / 628xxx`, m)
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await Ditss.onWhatsApp(num))[0]?.exists) return Ditss.reply(m.chat, '🚩 User not exists', m)
	let img = await Ditss.profilePictureUrl(num, 'image').catch(_ => './src/avatar_contact.png')
	let bio = await Ditss.fetchStatus(num).catch(_ => { })
	let name = await Ditss.getName(num)
	let business = await Ditss.getBusinessProfile(num)
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `${ki} WhatsApp Stalk ${htka}\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `${ka} WhatsApp Business Stalk ${htka}*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Descripcion* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
	img ? await Ditss.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
}


handler.command = ["wastalk"]

module.exports = handler
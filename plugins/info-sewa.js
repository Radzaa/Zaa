let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://ibb.co.com/ZHBYTdV`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*LANGSUNG SCAN SAJA!! Jika telah melakukan pembayaran silahkan kirimkan bukti pembayaran ke WhatsApp Owner.*`, m)
}

handler.help = handler.command = ['donasi','donate','sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler

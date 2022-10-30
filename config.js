/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev & AnggaXyzz
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6281997496643']
global.ownernomer = "6281997496643"
global.premium = ['6281997496643']
global.packname = 'Sticker By'
global.author = 'AnggaBotz'
global.sessionName = 'angga'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/angga.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/AnggaXyzZ'
global.myyt = 'https://youtube.com/channel/UCY89Fb9pCVUeMqEGikvOhNQ'
global.myytv = 'https://youtu.be/FAsL-Jy4qLc'
global.mygc = "https://chat.whatsapp.com/I1mlONQxvBlIk5lK7MnOfk"

// Engak Ngaruh, Belum Kepasang
global.botname = 'AnggaBotz'
global.akulaku = 'Bot By Angga'
global.ytname = 'YT AnggaXyzz' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

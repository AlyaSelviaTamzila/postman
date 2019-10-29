const express = require('express'); // untuk import express
const bodyParser = require('body-parser'); //impor dependancy body-parser
const app = express(); // deklarasi variabel express
const port = 8000; // deklarasi port

app.use(bodyParser.urlencoded({ extended: false })); // diatas endpoint agar dapat di eksekusi

app.get('/', function (req, res) { // function untuk deklarasi endpoint(antarmuka (bisa berupa URL, function/method)) '/' untuk memunculkan respon kepada web
    res.send('Hallo Programmer!'); // output web
});

app.get('/orang/:nama', function (req, res) { //:nama adalah parameter
    var namaOrang = req.params.nama; //deklarasi variabel namaOrang
    res.end('Menampilkan nama siswa: ' + namaOrang);
});

app.post('/orang', function (req, res) { //menggunakan body-parser untuk kirim data dengan post
    var namaOrang = req.body.nama;
    var alamat = req.body.alamat;
    res.end('Menampilkan orang baru, atas nama: ' + namaOrang + ', yang beralamat di ' + alamat);
});

app.delete('/orang/:id', function (req, res) { //penghapusan data akan dilakukan secara spesifik dengan parameter
    var id = req.params.id;
    var namaOrang = req.body.nama;
    res.end('ID ' + id + ' telah dihapus, atas nama' + namaOrang);
});

app.put('/orang/:id', function (req, res) { //untuk memperbaharui data
    var id = req.params.id; //deklarasi variabel id
    var namaOrang = req.body.nama;
    var alamat = req.body.alamat;
    res.end('Seseorang dengan ID ' + id + ', telah terupdate.');
});

app.listen(port, function(){ // function untuk 'listening port' agar web bisa di buka di port
    console.log('Terkoneksi!') // output di terminal
});


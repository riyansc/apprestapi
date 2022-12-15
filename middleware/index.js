var express = require('express');
var auth = require("./auth");
const verifikasi = require('./verifikasi');
var router = express.Router();

// Daftarkan registrasi
router.post("/api/v1/register", auth.registrasi);
router.post("/api/v1/login", auth.login);

// Alamat yang perlu autorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);

module.exports = router;

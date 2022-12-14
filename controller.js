"use strict";

var response = require("./res");
var connection = require("./koneksi");
const conn = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API berjalan", res);
};

// Menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data mahasiswa berdasarkan ID
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

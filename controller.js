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

// Menambahkan data mahasiswa
exports.tambahmahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query("INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)", [nim, nama, jurusan], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("berhasil Menambahkan Data!", res);
    }
  });
};

// Mengubah data mahasiswa
exports.ubahmahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim, nama, jurusan, id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah Data", res);
    }
  });
};

// Menghapus data mahasiswa

exports.hapusmahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa=?", [id], function (error) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil hapus data mahasiswa", res);
    }
  });
};

// Tampilkan matakuliah group
exports.tampilgroupmatakuliah = function (req, res) {
  connection.query(
    "SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs join matakuliah join mahasiswa where krs.id_matakuliah = matakuliah.id_matakuliah and krs.id_mahasiswa = mahasiswa.id_mahasiswa order by mahasiswa.id_mahasiswa",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.oknested(rows, res);
      }
    }
  );
};

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "http://192.168.153.126:8081/ ",
  user: "root",
  password: "drawtastic",
  database: 'test'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// var mysql = https://unpkg.com/mysql@2.18.1/index.js;

var con = mysql.createConnection({
  host: "192.168.153.126:3306",
  user: "root",
  password: "draw321",
  database: "david"
});

con.connect(function(err) {
  if (err) throw ("nee");
  console.log("Connected!");
});
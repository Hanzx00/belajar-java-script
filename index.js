const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "tokopaydi",
  password: "Hansen2003",
});

connection.query("select * from penjualan", function (err, result, fields) {
  //   console.log(err);
  console.log(result);
  //   console.log(fields);
});

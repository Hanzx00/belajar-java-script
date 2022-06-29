const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "tokopaydi",
  password: "Hansen2003",
});

app.get("/penjualan", (req, res) => {
  //   res.send("Hello World!");

  connection.query("select * from penjualan", function (err, result, fields) {
    //   console.log(err);
    console.log(result);
    //   console.log(fields);

    res.status(200).json(result);
  });
});

app.get("/pembayaran", (req, res) => {
  //   res.send("Hello World!");

  connection.query("select * from pembayaran", function (err, result, fields) {
    //   console.log(err);
    console.log(result);
    //   console.log(fields);

    res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`example app listeng on port ${port}`);
});

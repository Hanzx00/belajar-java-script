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

    /**
     * Code below here
     * task: tiap total_harga dikurang 100000
     */

    res.status(200).json(result);
  });
});

app.get("/pembayaran", (req, res) => {
  //   res.send("Hello World!");

  connection.query("select * from pembayaran", function (err, result, fields) {
    //   console.log(err);
    console.log(result);
    //   console.log(fields);

    /**
     * Code below here
     * task: hanya tampilkan yang is_using_payment_gateway = 1
     */

    res.status(200).json(result);
  });
});

app.get("/hello-warga", (req, res) => {
  res.status(201).json({
    result: " hello warga",
  });
});

app.post("/penjualan", (req, res) => {
  console.log(req.body);
  /**
   * Code below here
   * task: lakukan insert ke table penjualan dari object req.body
   */

  res.send("Hello Worldssss!");
});

app.listen(port, () => {
  console.log(`example app listeng on port ${port}`);
});

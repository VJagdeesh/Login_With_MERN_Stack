const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bank",
});

app.post("/login", (req, res) => {
  const sql = "SELECT username FROM resourcedb WHERE username=? AND password=?";
  //   const values = [req.body.email, req.body.password];
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) console.log(err);
    // if (data.length > 0) {
    //   return res.json("Login !!");
    // } else {
    //   return res.json("No record");
    // }
    return res.json(data);
  });
});

app.get("/try", (req, res) => {
  return res.send("SUCCESS");
});

app.listen(8081, () => {
  console.log("listening");
});

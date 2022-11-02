const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "windows_timers",
});

app.listen(3001, (err) => {
  if (err) console.log("error in server");
  console.log("Server listening on port:", 3001);
});

//GET
app.get("/api/get", (_, res) => {
  const sqlGet = "SELECT * FROM timers";
  
  db.query(sqlGet, (err, result) => {
    if (err) console.log("error in GET req");
    res.send(result);
  });
});

//POST
app.post("/api/post", (req, res) => {
  const title = req.body.title;
  const countDownTime = req.body.countDownTime;
  const sqlPost = "INSERT into timers (title, countDownTime) VALUES (?, ?)";

  db.query(sqlPost, [title, countDownTime], (err, result) => {
    if (err) console.log('the post error is:', err);
    res.send(result)
  })
})

//DELETE
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM timers WHERE id = ?"

  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log('the delete error is:', err);
    res.send(result);
  } )
})


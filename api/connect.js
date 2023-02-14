import mysql from "mysql"

export const db = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"dasuki97",
  database:"social",
  port:"3306"
})
db.connect(function(err) {
    if (err) return console.log('err', err)
    console.log("Connected!");
  });
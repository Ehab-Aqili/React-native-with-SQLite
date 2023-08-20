const sqlite3 = require("sqlite3").verbose();
let sql;

// Connect DataBase
let db = new sqlite3.Database(
  "../db/chinook.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  }
);
// add tables
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, first_name,last_name,username,email,password)`;
// db.run(sql);

// Insert Data to users table

// sql = `INSERT INTO users(first_name,last_name,username,email,password) VALUES (?,?,?,?,?)`;
// db.run(sql, ["alaa", "aqli", "alaa-aqili", "alaa@mail.com", "alaatest"], (err) => {
//   if (err) return console.log(err.message);
// });

// update data
// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, ["Hakam", 1], (err, success) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log("First Name Update success");
// });

// query all data

sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
  if (err) return console.log(err.message);
  rows.forEach((row) => {
    console.log(row);
  });
});

// delete users

// sql = ` DELETE FROM users WHERE id = ?`;
// db.run(sql, [2], (err)=>{
//    if (err) return console.log(err.message)
// })

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log("Close the database connection.");
// });

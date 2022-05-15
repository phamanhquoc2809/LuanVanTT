// const { Sequelize } = require("sequelize");

// // // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("laptop", "root", null, {
//   host: "localhost",
//   dialect: "mysql",
//   logging: false
// });

// let connetDB = async() =>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

// module.exports = connetDB;

import mysql from "mysql2/promise";

// // create the connection to database

console.log("Creating connection pool...");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "laptop",
  // password: 'password'
});

export default pool;

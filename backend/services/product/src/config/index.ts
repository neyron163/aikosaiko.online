import {Client} from 'pg';

export const client = new Client({
  database: 'mydb',
  host: 'localhost',
  port: 5432,
  user: 'andrew',
  password: '260062',
});

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize("mydb", "andrew", "260062", {
//   host: "localhost",
//   dialect: "postgres",
//   operatorsAliases: false,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully."); // eslint-disable-line no-console
//   })
//   .catch((err: {}) => {
//     console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
//   });

// export { sequelize };

const Sequelize = require("sequelize");
import DataTypes from "sequelize";

export const sequelize = new Sequelize("mydb", "andrew", "260062", {
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
  });

export const content = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  age: {
    type: DataTypes.INTEGER
  },
  img: DataTypes.STRING,
});

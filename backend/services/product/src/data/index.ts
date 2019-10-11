// it should be import instead require
const Sequelize = require("sequelize");

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
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
  });

const TABLE = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  age: {
    type: Sequelize.INTEGER
  },
  img: Sequelize.STRING,
  place: Sequelize.INTEGER,
  rating: Sequelize.STRING,
  votes: Sequelize.STRING,
  views: Sequelize.INTEGER,
  genre: Sequelize.STRING,
  type: Sequelize.STRING,
  year: Sequelize.INTEGER,
  status: Sequelize.STRING,
  studio: Sequelize.STRING,
  series: Sequelize.INTEGER
};

// creating table
sequelize.queryInterface.createTable("products", TABLE);

// define table products
export const content = sequelize.define("products", TABLE);

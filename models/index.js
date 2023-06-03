const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("employeedb", "root", "", {
  host: "localhost",
  port: 3325,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

  module.exports = sequelize;

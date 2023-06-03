const { Sequelize, DataTypes } = require("sequelize");
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

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.contact = require('./contact')(sequelize, DataTypes);
  db.user = require('./user')(sequelize, DataTypes);
  db.sequelize.sync({force: true});

  module.exports = db;

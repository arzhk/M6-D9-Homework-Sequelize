const { Sequelize, DataTypes } = require("sequelize");
const Article = require("./Article");
const Author = require("./Author");
const Category = require("./Category");
const Response = require("./Response");
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: "postgres",
});

const models = {
  Article: Article(sequelize, DataTypes),
  Author: Author(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  Response: Response(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;

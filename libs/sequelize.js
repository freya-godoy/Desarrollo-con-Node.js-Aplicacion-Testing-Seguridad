const { Sequelize } = require("sequelize");
const config = require("../config/config");
const setupModels = require("../db/models/index");
// import { Sequelize } from "sequelize";
// import config from "../config/config.js";
// import setupModels from "../db/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//console.error("sequelize.js URI:", URI);

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
});

setupModels(sequelize);

module.exports = sequelize;
//export default sequelize;

// import config from "../config/config.js";
const config = require("../config/config.js");

// configuracion para crear migraciones
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const migrationDBConfig = {
  development: {
    username: "gatito",
    password: "gatito123",
    database: "proyecto-my-api",
    URL: URI,
    dialect: "postgres",
  },
  production: {
    username: "gatito",
    password: "gatito123",
    database: "proyecto-my-api",
    url: URI,
    dialect: "postgres",
  },
};

// export default migrationDBConfig;
module.exports = migrationDBConfig;

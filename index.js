const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const { errorLogs, handlerError } = require("./middleware/error.handler.js");
const apiRouter = require("../proyecto-my-api/server/index.js");

//import "dotenv/config";
//import cors from "cors";
//import express from "express";
//import { errorLogs, handlerError } from "./middleware/error.handler.js";
//import { apiRouter } from "../proyecto-my-api/server/index.js";

let app = express();
const port = 3000; // Si la variable esta en heroku va escuchar process.env.PORT y si esta en local  3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  //req: la peticion(requiere) / res: la respuesta(response)
  res.send("hola mundo");
});

apiRouter(app);

app.use(handlerError);
app.use(errorLogs);

app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
});

module.exports = app;

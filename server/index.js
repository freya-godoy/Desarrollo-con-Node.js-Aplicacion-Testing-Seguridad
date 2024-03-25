const express = require("express");
const productRouter = require("../routes/products.js");
const usersRouter = require("../routes/users.js");
const clientRouter = require("../routes/client.js");
const categoryRouter = require("../routes/category.js");

function apiRouter(app) {
  const router = express.Router();
  router.use("/products", productRouter);
  router.use("/users", usersRouter);
  router.use("/client", clientRouter);
  router.use("/categories", categoryRouter);
  app.use("/api/v1", router);
}

module.exports = apiRouter;

const express = require("express");
const servicesProducts = require("../services/servicesProducts");
const validatorHandler = require("../middleware/validator.hendler.js");
const {
  schemaProductCreate,
  updateSchemaProduct,
  getProductSchema,
} = require("../schema/schemaProduct");

// import express from "express";
// import servicesProducts from "../services/servicesProducts.js";
// import validatorHandler from "../middleware/validator.hendler.js";
// import {
//   schemaProductCreate,
//   updateSchemaProduct,
//   getProductSchema,
// } from "../schema/schemaProduct.js";
//import getProductSchema from "../schema/schemaProduct.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await servicesProducts.getAllProducts(req, res);
    res.send({products});
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const productOne = await servicesProducts.getOneProduct(id);
      return res.send(productOne);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(schemaProductCreate, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const createProduct = await servicesProducts.createnewProducts(body);
      res.send({createProduct})
      return createProduct;
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateSchemaProduct, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateProduct = await servicesProducts.updateProduct(body, id);
      res.send({updateProduct})
      return updateProduct;
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = ProductServices.deleteProduct(id);
    res.send({deleteProduct})
    return res.json(deleteProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

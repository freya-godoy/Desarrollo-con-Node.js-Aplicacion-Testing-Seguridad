const sequelize = require("../libs/sequelize.js");
const { models } = sequelize;

// const faker = require("faker");
// const boom = require("@hapi/boom");
//const { response } = require("express");
// import faker from "faker";
// import boom from "@hapi/boom";
// //import { pool } from "../libs/postgres.js";
// import { Sequelize } from "sequelize";
// import sequelize from "../libs/sequelize.js";
// import { response } from "express";

const getAllProducts = async () => {
  try {
    const data = await models.Product.findAll({
      include: ['category']
    });
    return {
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

const createnewProducts = async (body) => {
  try {
    console.log("createnewProducts body:", body);
    const newProducts = await models.Product.create(body);
    console.log("createnewProducts newProducts:", newProducts);
    return newProducts;
  } catch (error) {
    console.log("createnewProducts error:", error);
  }
};

const updateProduct = async (id, body) => {
  try {
    const category = await models.Product.findByPk(id);
    if (!category) {
      return {
        error: "category not found ",
      };
    }
    const response = await category.update(body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const category = await models.Product.findOne(id);
    await category.destroy();
    return {
      message: "category delete",
      id,
    };
  } catch (error) {}
};

const getOneProduct = async () => {
  try {
    const product = await models.Product.findOne(id);
    if (!product) {
      return {
        message: "product no found",
      };
    }
    return product;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createnewProducts,
  updateProduct,
  deleteProduct,
  getOneProduct,
};

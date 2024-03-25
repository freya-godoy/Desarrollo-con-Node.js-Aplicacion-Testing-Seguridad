//import Joi from "joi"; // ESta libreria nos permite generar un Schema
const Joi = require("joi");

const id = Joi.number().integer()
const name = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10)
const categoryId = Joi.number().integer()

const schemaProductCreate = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  categoryId: categoryId.required()
});

const updateSchemaProduct = Joi.object({
  name: name,
  price: price,
  description: description,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { schemaProductCreate, updateSchemaProduct, getProductSchema };

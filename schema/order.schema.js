//import Joi from "joi"; // ESta libreria nos permite generar un Schema
const Joi = require("joi");

const id = Joi.string().integer();
const email = Joi.string().email();
const password = Joi.number().min(10);

const schemaUserCreate = Joi.object({
  email: email.required(),
  password: password.required(),
});

const updateSchemaUser = Joi.object({
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { schemaUserCreate, updateSchemaUser, getUserSchema };

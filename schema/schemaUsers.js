//import Joi from "joi"; // ESta libreria nos permite generar un Schema
const Joi = require ('joi')

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.number().min(10);
const role = Joi.string().min(5)

const schemaUserCreate = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role,
});

const updateSchemaUser = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { schemaUserCreate, updateSchemaUser, getUserSchema };

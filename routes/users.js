const express = require("express");
const servicesUser = require("../services/servicesUsers.js");
const router = express.Router();
const {
  updateSchemaUser,
  schemaUserCreate,
  getUserSchema,
} = require("../schema/schemaUsers.js");
const validatorHandler = require("../middleware/validator.hendler.js");
// import express from "express";
// import servicesUser from "../services/servicesUsers.js";
// const router = express.Router();
// import {
//   updateSchemaUser,
//   schemaUserCreate,
//   getUserSchema,
// } from "../schema/schemausers.js";
// import validatorHandler from "../middleware/validator.hendler.js";

router.get("/", async (req, res, next) => {
  try {
    const getUsers = await servicesUser.getAllUsers(req, res);
    return res.send(getUsers);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneUser = await servicesUser.findOne(id);
      res.json(oneUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  //validatorHandler(schemaUserCreate, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await servicesUser.createUser(body);
      return res.json(newUser);
    } catch (error) {
      console.log("post user error", error);
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(updateSchemaUser, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateUser = await servicesUser.updateUser({ id, body });
      return res.json(updateUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateUser = await servicesUser.deleteUser({ id });
    return res.json(deleteUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

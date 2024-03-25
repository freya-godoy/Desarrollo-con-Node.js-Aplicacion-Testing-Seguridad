const pkg = require("@hapi/boom");
const { boom } = pkg;
const sequelize = require("../libs/sequelize.js");
const { models } = sequelize;
// import pkg from "@hapi/boom";
// const { boom } = pkg;
// import sequelize from "../libs/sequelize.js";
// const { models } = sequelize;

const getAllUsers = async () => {
  const response = await models.User.findAll({
    incluide: ['client']
  });

  return response;
};

const findOne = async (id) => {
  try {
    const response = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("user nor found");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (body) => {
  try {
    const newUser = await models.User.create(body);
    return {
      user: newUser,
      message: "User created",
    };
  } catch (error) {
    console.log("createUser error:", error);
  }
};

const updateUser = async ({ id, body }) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      return {
        error: "user not found",
      };
    } 
    const response = await user.update(body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await models.User.findOne(id);
    await user.destroy();
    return {
      message: "user delete",
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser, findOne };

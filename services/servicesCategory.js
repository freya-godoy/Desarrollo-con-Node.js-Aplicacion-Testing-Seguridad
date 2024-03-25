const pkg = require("@hapi/boom");
const { boom } = pkg;
const sequelize = require("../libs/sequelize.js");
const { models } = sequelize;

const allCategory = async () => {
  try {
    const allCategory = await models.Category.findAll();
    return allCategory;
  } catch (error) {
    console.log(error); // mostrar en consola si hay un error
  }
};

const oneCategory = async (id) => {
  try {
    const oneCategory = await models.Category.findByPk(id, {
      include: ['products']
    });
    return oneCategory;
  } catch (error) {
    console.log(error); // mostrar en consola si hay un error
  }
};

const createCategory = async (body) => {
  try {
    const createCategory = await models.Category.create(body);
    return createCategory;
  } catch (error) {
    console.log(error); // mostrar en consola si hay un error
  }
};

const updateCategory = async (id, body) => {
  try {
    const updateCategory = await models.Category.findByPk(id, body);
    return updateCategory;
  } catch (error) {
    console.log(error); // mostrar en consola si hay un error
  }
};

const categoryDelete = async (id) => {
  try {
    const categoryDelete = await models.Category.delete(id);
    return {
      categoryDelete,
      id,
    };
  } catch (error) {
    console.log(error); // mostrar en consola si hay un error
  }
};

module.exports = {
  allCategory,
  oneCategory,
  createCategory,
  updateCategory,
  categoryDelete,
};

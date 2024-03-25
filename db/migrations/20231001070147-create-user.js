"use strict";

const { UserSchema, USER_TABLE } = require("../models/user.model.js");

module.exports = {
  async up(queryInterface) {
    console.log('pase tabla user')
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },
  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  }
};

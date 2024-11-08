'use strict';
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = fs.readFileSync("./data/disease.json", "utf-8");
    data = JSON.parse(data);

    data.forEach(el => {
      delete el.id
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })

    await queryInterface.bulkInsert('Diseases', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Diseases', null, {});
  }
};

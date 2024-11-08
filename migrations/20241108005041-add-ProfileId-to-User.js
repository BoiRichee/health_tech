'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Users',
      'ProfileId',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Profiles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('User_Diseases', 'SymptomId')
  }
};

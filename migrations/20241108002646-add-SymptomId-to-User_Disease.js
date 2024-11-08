'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'User_Diseases',
      'SymptomId',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Diseases',
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

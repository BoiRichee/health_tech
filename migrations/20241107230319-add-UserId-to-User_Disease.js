'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'User_Diseases',
      'UserId',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('User_Diseases', 'UserId')
  }
};

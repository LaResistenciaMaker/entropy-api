module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('devices', {
      uuid: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      version: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.STRING,
      },
      instalationDate: {
        type: Sequelize.DATE,
      },
      lastUpdate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('devices');
  },
};

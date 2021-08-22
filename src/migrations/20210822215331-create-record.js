module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      deviceUuid: {
        type: Sequelize.UUID,
      },
      timestamp: {
        type: Sequelize.DATE,
      },
      temperature: {
        type: Sequelize.FLOAT,
      },
      humidity: {
        type: Sequelize.FLOAT,
      },
      co2: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('records');
  },
};

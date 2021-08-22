module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.TEXT,
      },
      locationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locations',
          key: 'id',
        },
      },
      deviceUuid: {
        type: Sequelize.UUID,
        references: {
          model: 'devices',
          key: 'uuid',
        },
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
    await queryInterface.dropTable('rooms');
  },
};

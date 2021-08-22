const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  device.init({
    uuid: {
      type: DataTypes.UUID,
    },
    version: DataTypes.STRING,
    notes: DataTypes.TEXT,
    instalationDate: DataTypes.DATE,
    lastUpdate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'device',
  });
  return device;
};

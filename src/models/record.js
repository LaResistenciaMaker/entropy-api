const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.device);
    }
  }
  record.init({
    deviceUuid: DataTypes.UUID,
    timestamp: DataTypes.DATE,
    temperature: DataTypes.FLOAT,
    humidity: DataTypes.FLOAT,
    co2: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'record',
  });
  return record;
};

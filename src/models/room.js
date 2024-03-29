const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.location);
      this.hasOne(models.device);
    }
  }
  room.init({
    name: DataTypes.STRING,
    notes: DataTypes.TEXT,
    locationId: DataTypes.INTEGER,
    deviceUuid: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'room',
  });
  return room;
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  location.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    contactPhone: DataTypes.STRING,
    contactMail: DataTypes.STRING,
    notes: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'location',
  });
  return location;
};

const { Model, DataTypes, Sequelize } = require('sequelize');

const DRIVER_TABLE = 'Driver';
const driverSchema = {
  idDriver: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  fullName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  document: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'ACTIVE'
  }

};

class Driver extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DRIVER_TABLE,
      modelName: 'Driver',
      timestamps: false,
    };
  }
}

module.exports = { DRIVER_TABLE, driverSchema, Driver };
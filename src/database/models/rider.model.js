const { Model, DataTypes, Sequelize } = require('sequelize');

const RIDER_TABLE = 'Rider';
const riderSchema = {
  idRider: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  fullName: {
    allowNull: false,
    type: DataTypes.STRING,
  },

};

class Rider extends Model {
  static associate() {
    
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RIDER_TABLE,
      modelName: 'Rider',
      timestamps: false,
    };
  }
}

module.exports = { RIDER_TABLE, riderSchema, Rider };
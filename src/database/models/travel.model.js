const { Model, DataTypes, Sequelize } = require('sequelize');
const { RIDER_TABLE } = require('./rider.model')
const { DRIVER_TABLE } = require('./driver.model')

const TRAVEL_TABLE = 'Travel';
const travelSchema = {
    idTravel: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    idRiderFK: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: RIDER_TABLE, key: 'idRider' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idDriverFK: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: DRIVER_TABLE, key: 'idDriver' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    latitudeInit: {
        allowNull: false,
        type: DataTypes.FLOAT,

    },
    lengthInit: {
        allowNull: false,
        type: DataTypes.FLOAT,

    },
    latitudeEnd: {
        allowNull: true,
        type: DataTypes.FLOAT,

    },
    lengthEnd: {
        allowNull: true,
        type: DataTypes.FLOAT,

    },
    dateStart: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    dateEnd: {
        allowNull: true,
        type: DataTypes.DATE,
    }

};

class Travel extends Model {
    static associate() {
        // this.belongsTo(models.Driver, { as: 'driver' });
        // this.belongsTo(models.Rider, { as: 'rider' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TRAVEL_TABLE,
            modelName: 'Travel',
            timestamps: false,
        };
    }
}

module.exports = { TRAVEL_TABLE, travelSchema, Travel };
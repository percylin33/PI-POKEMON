const { DataTypes, NUMBER } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('tipo', {
        slot: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        }
    });
}


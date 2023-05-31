const { DataTypes, NUMBER } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('tipo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            unique: true,
        }
    },{timestamps: false,}
    );
}


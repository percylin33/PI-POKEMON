const sequelize = require("sequelize");
const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "Type", {
            id :{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'I_1'
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        { timestamps: false}
    )
}
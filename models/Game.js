const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gm_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_content: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
    },
)

module.exports = Game;
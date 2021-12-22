const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Invite extends Model {}

Invite.init(
    {
        from_user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
    },
)

module.exports = Invite;
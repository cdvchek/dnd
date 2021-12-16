const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserGame extends Model {}

UserGame.init(
  {
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'games',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
  },
  {
    sequelize,
  }
);

module.exports = UserGame;
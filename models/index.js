const User = require("./User");
const Game = require("./Game");
const UserGame = require("./UserGame");

User.belongsToMany(Game, {
    through: "UserGame",
    unique: false,
    foreignKey: 'user_id',
});

Game.belongsToMany(User, {
    through: "UserGame",
    unique: false,
    foreignKey: 'game_id'
});

module.exports={
    User,
    Game,
    UserGame,
};
const User = require("./User");
const Game = require("./Game");
const UserGame = require("./UserGame");
const Invite = require("./Invite");

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

User.hasMany(Invite, {
    foreignKey: 'user_id'
})
Invite.belongsTo(User, {
    foreignKey: 'user_id'
})
    
Game.hasMany(Invite, {
    foreignKey: 'game_id'
})
Invite.belongsTo(Game, {
    foreignKey: 'game_id'
})

module.exports={
    User,
    Game,
    UserGame,
    Invite,
};
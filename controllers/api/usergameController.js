const express = require('express');
const router = express.Router();
const { UserGame, } = require('../../models');

// ADD USER TO GAME
router.post('/',(req,res) => {
    UserGame.create({
        game_id: req.body.game_id,
        user_id: req.session.user.id
    }).then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({message: "Something went wrong with adding a user to a game."})
    });
});

module.exports = router;
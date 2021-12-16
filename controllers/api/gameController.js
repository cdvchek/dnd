const express = require('express');
const router = express.Router();
const { Game, UserGame, } = require('../../models');

router.post("/", (req,res) => {
    const { name, gm_id, description, } = req.body;
    Game.create({
        name,
        gm_id,
        description,
    }).then((response1) => {
        UserGame.create({
            user_id: Number(gm_id),
            game_id: Number(response1.id),
        }).catch((err) => {
            console.log(err);
        })
        res.status(200).json(response1);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({message: "Something went wrong with creating a game"});
    });
});

module.exports = router;
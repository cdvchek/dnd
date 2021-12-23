const router = require('express').Router();
const { User, Game, Invite} = require('../models');

// Home Page Route
router.get("/",(req,res) => {
    if(req.session.user){
        User.findByPk(req.session.user.id, {
            include: [Game, Invite],
        }).then((response) => {
            const rawResponse = response.get({ plain:true });
            for (let i = 0; i < rawResponse.Games.length; i++) {
                rawResponse.Games[i].isGM = (rawResponse.Games[i].gm_id == req.session.user.id);
            }
            const hbsObj = {
                invite: [...rawResponse.Invites],
                game: [...rawResponse.Games],
                username: rawResponse.username,
                email: rawResponse.email,
            }
            return res.render("home",hbsObj);
        }).catch((err) => {
            console.log(err);
            res.status(500).json({message: "Something went wrong!"})
        })
    } else {
        return res.render("login")
    }
});

// Signup
router.get("/signup",(req,res) => {
    return res.render("signup");
});

// Game
router.get("/game:id",(req,res) => {
    if(req.session.user){
        Game.findByPk(req.params.id).then((response) => {
            const hbsObj = response.get({ plain:true });
            hbsObj.isGM = req.session.user.id == hbsObj.gm_id;
            hbsObj.username = req.session.user.username;
            return res.render("game",hbsObj);
        })
    } else {
        // TODO: it shouldnt be a 404, it should be whatever unauthorized is, because they arent authorized to see this game.
        return res.status(404).redirect('/');
    }
});

module.exports = router;
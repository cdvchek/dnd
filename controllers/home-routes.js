const router = require('express').Router();
const { User, Game, Invite} = require('../models');

// Home Page Route
router.get("/",(req,res) => {
    return res.render("login");
});

router.get("/login",(req,res) => {
    return res.render("login");
});

router.get("/signup",(req,res) => {
    return res.render("signup");
});

router.get("/home",(req,res) => {
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
        console.log(hbsObj.invite);
        if(req.session.user){
            return res.render("home",hbsObj);
        } else {
            return res.render("login");
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json({message: "Something went wrong!"})
    })
});

router.get("/game/:id",(req,res) => {
    if(req.session.user){
        Game.findByPk(req.params.id).then((response) => {
            const hbsObj = response.get({ plain:true });
            hbsObj.isGM = req.session.user.id == hbsObj.gm_id;
            return res.render("game",hbsObj);
        })
    } else {
        return res.render("login");
    }
});

module.exports = router;
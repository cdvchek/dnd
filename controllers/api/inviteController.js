const express = require('express');
const router = express.Router();
const { Invite, Game, User } = require('../../models');
  
// GET ALL INVITES FOR ONE USER
router.get('/myinvites',(req,res) => {
    Invite.findAll({
        where: {
            user_id: req.session.user.id,
        },
    }).then((response) => {    
        res.status(200).json(response)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with finding your invites."});
    });
});

// SEND GAME INVITE TO USER
router.post('/',(req,res) => {
    User.findOne({
        where: {
            email: req.body.user_email,
        }
    }).then((response) => {
        if(response){
            const rawResponse = response.get({ plain:true });
            Invite.create({
                game_id: req.body.game_id,
                user_id: rawResponse.id,
                game_name: req.body.game_name,
                from_user: req.session.user.username,
            }).then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                console.log(err);
                res.status(500).json({message: "Something went wrong with sending the invite."})
            });
        } else {
            res.status(404).json({message:"Couldn't find a user with that email."})
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json({message: "Something went wrong, there is no user with this email."})
    });
});
  
// DELETE INVITE
router.delete('/:id',(req,res) => {
    console.log(req.params.id);
    Invite.destroy({
        where: {
            id: req.params.id,
        },
    }).then((response) => {
        res.status(200).json(response)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);    
    });
});

module.exports = router;
// This deals with the Users Table
const express = require('express');
const router = express.Router();
const { User, } = require('../../models');
const bcrypt = require("bcrypt");

router.post("/signup", (req,res) => {
    const { username, email, password, } = req.body;
    User.create({
        username,
        email,
        password,
    }).then((response)=> {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    });
});

router.post("/login", (req, res) => {
    // Login Form Route
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(foundUser => {
        if (!foundUser) {
            req.session.destroy()
            res.status(401).json({ message: "Incorrect email or password" })
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.user = {
                    username: foundUser.username,
                    email: foundUser.email,
                    id: foundUser.id
                }
                res.status(200).json({foundUser})
            } else {
                req.session.destroy()
                res.status(401).json({ message: "Incorrect email or password" })
            }
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/logout", (req,res)=>{
    req.session.destroy(()=>{
        res.json({msg:"Session destroyed"})
    });
});

module.exports = router;
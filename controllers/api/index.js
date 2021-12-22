// API Controllers
const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const gameRoutes = require("./gameController");
router.use("/games",gameRoutes);

const usergameRoutes = require("./usergameController");
router.use("/usergames",usergameRoutes);

const inviteRoutes = require("./inviteController");
router.use("/invites",inviteRoutes);

router.get("/",(req,res)=>{
    // Catchall
    res.send("API Deadend!")
})


module.exports = router;
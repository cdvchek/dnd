// API Controllers
const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const gameRoutes = require("./gameController");
router.use("/games",gameRoutes);

router.get("/",(req,res)=>{
    // Catchall
    res.send("API Deadend!")
})


module.exports = router;
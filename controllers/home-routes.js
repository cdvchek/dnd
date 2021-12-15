const router = require('express').Router();

// Home Page Route
router.get("/",(req,res)=>{
    return res.render("login")
});

router.get("/signup",(req,res)=>{
    return res.render("signup")
});

router.get("/home",(req,res)=>{
    return res.render("home")
});

module.exports = router;
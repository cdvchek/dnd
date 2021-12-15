const router = require('express').Router();

// Home Page Route
router.get("/",(req,res)=>{
    return res.render("login")
});

router.get("/signup",(req,res)=>{
    return res.render("signup")
});

router.get("/home",(req,res)=>{
    console.log(req.session.user);
    if(req.session.user){
        return res.render("home");
    } else {
        return res.render("login");
    }
});

module.exports = router;
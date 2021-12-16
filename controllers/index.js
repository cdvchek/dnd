const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;
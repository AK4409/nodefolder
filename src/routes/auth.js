const express = require("express");
const router = express.Router();
const {checkAge} = require("../middleware/filter")

router.get('/login',checkAge,(req,res)=>{
    res.render('frontend/login');
})

router.post('/login',(req,res)=>{
    req.session.title ="Node Tutorial"
    if (req.body.username == '') {
        res.send("Empty username")
    } else {
        let data = req.body;
        res.render("frontend/dashboard",{displayData:data,session:req.session})
    }
   
})

router.get('/logout',(req,res)=>{
    res.send('ok');
})
module.exports = router
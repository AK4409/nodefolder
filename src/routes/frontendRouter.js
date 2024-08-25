const express = require("express");
const router = express.Router();
const {showRegisterForm,addUser,showUser,showSingleUser,deleteUser,showUserPosts} = require("../controller/registerController");
const {showLoginForm,login} = require("../controller/authController");

const {registerValidate} = require("../validations/registerValidation");
const {validate} = require("../middleware/validate");
const {body}= require("express-validator")

router.get("/register",showRegisterForm);

router.get("/users",showUser);
router.get("/users/:id",showSingleUser);
router.get("/users/:id/delete",deleteUser);
router.get("/users/:id/posts",showUserPosts);


router.get("/login",showLoginForm);


router.post("/register",[body("full_name").isLength({min:2}).withMessage("Full name must be of character 2")],validate,addUser);
router.get("/contact",(req,res)=>{
    res.render("frontend/contact",{"errors":req.flash("errors")});
})

router.post("/contact",[body("firstname").isLength({min:2}).withMessage("First name must be of character 2")],validate,(req,res)=>{
    try{

    } catch(err) {
        req.flash("errors",err);
        res.redirect("back");
    }
})

router.get("/signup",(req,res)=>{
    res.render("frontend/register");
})

module.exports = router;
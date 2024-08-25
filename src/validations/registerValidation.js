const {body} = require("express-validator");

const registerValidate = [
body("full_name")
.isLength({min:2})
.withMessage("Full Name is empty"),
body("email")
.isLength({min:2})
.withMessage("Email is empty")
.isEmail()
.withMessage("Invalid Email")];

module.exports = {registerValidate}


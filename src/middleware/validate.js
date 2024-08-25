const {validationResult} = require("express-validator");

const validate = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     req.flash("errors",errors.array());
     res.redirect("back");
    } else {
        next();
    }
 
}

module.exports ={validate}
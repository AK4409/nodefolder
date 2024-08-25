const checkAge =(req,res,next)=>{
    if (req.query.age > 18) {
       next();
    } else {
     res.render("frontend/errors/404");
    } 
}


module.exports ={
    checkAge 
}
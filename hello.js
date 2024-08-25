
app.get("/",(req,res)=>{
    res.render("frontend/index");
    })
    
    
    app.use('/auth',authRouter)
    
    
    
       app.get("/profile",(req,res)=>{
        try{
            let dynamicData={
                name:"Samina Tuladhar",
                title:"Senior Software Developer",
                university:"TU Univeristy",
                socialClass:[{"className":"fa-dribbble"},{"className":"fa-twitter"},{"className":"fa-linkedin"},{"className":"fa-facebook"}]
                };
            res.render("frontend/profile",{dynamicData:dynamicData});
        } catch(err) {
            console.log(err);
    
        }
      
    })
    // app.get('*', (req, res, next) => {
    //     const err = 'Page Not Found'
    //     err.status = 404;
    //     next(err);
    // });
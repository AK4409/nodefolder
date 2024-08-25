const express = require("express");
const path = require("path");
const app = express();
const moment = require("moment");
const fs = require("fs");
const pathFolder = path.join(`${__dirname}/public`);
const {checkAge} = require("./src/middleware/filter");
const {notFoundHandler} = require("./src/middleware/errorMiddleware");
const authRouter = require("./src/routes/auth")
const frontendRouter = require("./src/routes/frontendRouter")
const {sequelize} = require("./src/sequelize/models");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require('dotenv').config();

app.use(express.static(pathFolder))
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser("secret"));
app.use(session({
    secret:"node tutorial",
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false}
}))
app.use(flash());

app.use("/",frontendRouter);

app.use(function(req,res,next){
    console.log(req.flash());
    console.log("----------")
res.locals.errors =req.flash("erros");
res.locals.customError = req.flash("custom-error");
next();
})

const connectDB = async () => {
    await sequelize.authenticate();
    console.log("Database connected");
}

(async ()=>{
    await connectDB();
    app.listen(5200);
})();


// app.use(notFoundHandler);



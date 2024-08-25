const express = require("express");
const app = express();
const path = require("path");
const middlewareFilter = require("./middleware/filter")


app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");


// app.use(middlewareFilter);


app.get("/", (req,res) => { 
    res.render("frontend/index");
})

app.get("/profile",middlewareFilter, (req,res) => { 
    let profileData ={
        name:"Samina Tuladhar",
        image:`/frontend/img/hero-img-1.png`,
        title:"Senior Software Developer",
        university:"TU University",
        socialUrl:[{
            "className":"fa-dribbble",
        },{ "className":"fa-twitter"},{
            "className":"fa-linkedin",
        },
        {"className":"fa-facebook"}
        ]
    }
    res.render("frontend/profile",{profileData:profileData});
})


app.get("*",(req,res)=>{
    res.send("Bad Request");
})
app.listen(2020, () => { 
    console.log("Server running on port 2020");
})
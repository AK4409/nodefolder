const {User,Post} = require("../sequelize/models");

const showRegisterForm = (req,res)=> {
    res.render("frontend/register",{"errors":req.flash("errors")});
}

const showUserPosts=async (req,res) =>{
    let id= req.params.id;
   let posts =  await Post.findAll({
        where:{user_id:id,status:true}
    });
    res.render("frontend/post",{postData:posts})
}

const addUser= async (req,res)=>{
    try{
        await User.create(req.body);
        res.redirect("back");
    } catch (err) {
        req.flash("errors",err);
        res.redirect("back");
    }
 

}

const deleteUser = async (req,res) =>{
 let id =  req.params.id;
 await User.destroy({where:{id:id}});
 res.redirect("back")
}

const showSingleUser = async (req,res) =>{
    let id =  req.params.id;
    let users = await User.findOne({
        where:{id:id},
    });
    if (!users) {
        req.flash("custom-error","User not found");
        res.render("frontend/errors/404",{"custom-error":req.flash("custom-error")});
    } else {
        res.render("frontend/single-user",{singleUser:users})
    }
}



const showUser =async (req,res) =>{
    let users = await User.findAll({});
    res.render("frontend/userList",{userData:users});
}



module.exports ={showRegisterForm,addUser,showUser,showSingleUser,deleteUser,showUserPosts};
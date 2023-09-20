const User = require("../models/userModel");

exports.userRegister = (req,res) =>{
    try {

        console.log(req.body);
        const user = User.create(req.body);

        if(user){
            res.status(201).json({
                message:"User registration successful",
                user
            })
        }
    } catch (error) {
        res.status(401).json({
            message:error.meassage
        })
    }
}
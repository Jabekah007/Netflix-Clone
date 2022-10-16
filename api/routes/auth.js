const router = require('express').Router();
const User = require('../models/User')

//REGISTER

/* The above code is creating a new user and saving it to the database. */
router.post("/register", (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    });
    console.log(newUser)

    try{
        const user = newUser.save();
        res.status(201).json(user);

    }
    catch(err){
        
        res.status(500).json(user)
    }


   
});

module.exports = router;
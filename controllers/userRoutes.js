const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.post("/signup", (req, res)=>{
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(userData=>{
        res.json(userData);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error!",
            error:err
        })
    })
})

router.get("/secretclub", (req, res)=>{
    res.send("welcome to the secret club")
})

module.exports = router;
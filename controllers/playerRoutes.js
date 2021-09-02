const express = require('express');
const router = express.Router();
const {Player} = require('../models');

router.get('/players', (req, res)=>{
    Player.findAll({
        // include: [
        //     {
        //         model:db.Player,
        //         include:{}
        //     }
        // ]
    }).then(playerData=>{
        res.json(playerData);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error!",
            error:err
        })
    })
    
})


router.get("/player", (req, res)=>{
    Player.findOne({
        where:{
            id: req.user.id
        }
    }).then(userData=>{
        res.json(userData);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message: "Error!", 
            error: err
        });
    });
})

module.exports = router;
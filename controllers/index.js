const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');


router.get('/', (req, res)=>{
    res.send('Testing Server');
})

router.use(userRoutes);


module.exports = router;

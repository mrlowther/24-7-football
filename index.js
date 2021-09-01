const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const {User} = require("./models")
const allRoutes = require('./controllers');

const sequelize = require("./config/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(allRoutes);


sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,function(){
        console.log(`App listening on PORT ${PORT}`)
    });
})


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
  {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    number: {
      type: DataTypes.INTEGER,
     
      
    },
    position: {
      type: DataTypes.STRING,
       allowNull: false
    },
    height: {
      type: DataTypes.STRING,
    },
    weight: {
        type: DataTypes.INTEGER,
      },
    college: {
        type: DataTypes.STRING,

      },
  },
 
    {
    sequelize,
    }
);

module.exports = Player;

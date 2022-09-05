const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('users', {

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  },{
    timestamps: false
  });
};
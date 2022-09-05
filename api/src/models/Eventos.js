const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('eventos', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    longDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
    organizer: {
      type: DataTypes.STRING
    },
    place: {
      type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
    pending:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    inscriptos: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: [],
    }

    
  },{
    timestamps: false
  });
};
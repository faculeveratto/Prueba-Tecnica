const { Router } = require('express');
const { Eventos} = require("../../../db");
const axios= require("axios");

//ver todos los eventos publicados
const visualizacionUsers = async (req, res) => {
    const eventos = await Eventos.findAll({
        where: {
        state: "Publicada"
        }
      });
      res.send(eventos)
}
module.exports = visualizacionUsers
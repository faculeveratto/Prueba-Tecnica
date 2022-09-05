const { Router } = require('express');
const { Eventos } = require("../../db");

const nuevoEvento = Router ()

// publicar un nuevo evento
nuevoEvento.post ("/", async (req, res) => {
    const { title, shortDescription, longDescription, date, organizer, place, state} = req.body
    try{
        const evento = await Eventos.findOrCreate({
          where: {title, shortDescription, longDescription, date, organizer, place, state}
        })
        res.send("Evento creado correctamente")
    }catch (error){
        console.log(error)
    }
})

module.exports = nuevoEvento
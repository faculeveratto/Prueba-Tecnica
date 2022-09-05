const api = require("../../api.json")
const { Eventos } = require("../db")

//cargar todos los eventos a la base de datos
const evento = async (req, res) => {
    const data = await api.eventos
    
    await data.forEach(e => {
        Eventos.findOrCreate({
          where: { id: e.id, title: e.title, shortDescription: e.shortDescription, longDescription: e.longDescription, date: e.date, organizer: e.organizer, place: e.place, state: e.state }
        })
    })
    const eventoDB = await Eventos.findAll()
    res.send(eventoDB)
}

module.exports = {evento}

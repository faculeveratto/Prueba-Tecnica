const api = require("../../api.json")
const { Eventos } = require("../db")

//cargar todos los eventos a la base de datos
const eventosID = async (req, res) => {
    const {id} = req.params

    const even = await Eventos.findAll ({
      where: {id: id}  
    })
    res.send(even)
}

module.exports = {eventosID}

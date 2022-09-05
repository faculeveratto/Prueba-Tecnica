const {Eventos} = require("../../../db");


// visualizar todos los eventos
async function admin (req, res){
    const eventos = await Eventos.findAll()
    res.send(eventos)
};

module.exports = admin
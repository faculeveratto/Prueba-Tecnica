const { Router } = require('express');
const {Eventos, Users} = require('../../../db')
const inscripto = Router ()

//inscribirme a un evento dependiendo la fecha, hora y inscripcion anteriormente
inscripto.put("/:address/:id", async (req, res) => {
    const { address, id } = req.params;
    const toDay = new Date()

    try {
      let usuario = await Users.findByPk(address);
      let evento = await Eventos.findAll({
        where: {id: id,},
      });
      let fecha = evento[0].date
      let fechaJson = new Date(fecha);
      
      if (fechaJson > toDay){
             if (evento[0].inscriptos.includes(address)){
                res.send("El usuario ya esta inscripto")
                 }
                  else if (!evento[0].inscriptos) {
                     res.send( await Eventos.update({ inscriptos: usuario.address}, { where: { id: id } }))
                     res.send("Incripto con exito")
                     }
                      else {
                          res.send(await Eventos.update(
                           { inscriptos: evento[0].inscriptos.concat(usuario.address) },
                             { where: { id: id } }
                              ))

      }
    }else if(fechaJson < toDay) {
        res.status(404).send("Este evento ya paso")
  }


    } catch (error) {
      console.log(error);
    }
  });

  module.exports = inscripto
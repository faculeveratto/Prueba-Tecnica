const Router = require("express");
// const api = require("../../../api.json")
const { Users, Eventos} = require("../../db");
//const Eventos = require("../../models/Eventos");
const router = Router();

router.get("/:address", async (req, res) => {
    const { address } = req.params;
    
    
    try {
        
        const misEventos = await Eventos.findAll();

        for(let i= 0; i < misEventos.length; i++ ){
            for (let j = 0; j < misEventos[i].inscriptos.length; j++) {
                if(misEventos[i].inscriptos[j] === address){
                    res.send(misEventos[i])
                }else {
                    res.send("no esta inscripto a ningun evento")
                }
                    

        }
    }



        // for (let i = 0; i < Eventos.length; i++) {
        //     console.log('entra en el evento', i)
            // for (let j = 0; j < Eventos[i].inscriptos; j++) {
                //     console.log('entra en el inscriptos', j)
                //     if(Eventos[i].inscriptos.includes(usuario))
                //     res.send("hola")
                // }
            
            
            // console.log(misEventos)
            // console.log("no entro en el for")
    //      data.forEach(e => {
    //         for(i = 0; i< e.inscriptos.length; i++){
    //             if (e.inscriptos[i].includes(usuario)){

    //                 console.log("hola")
    //             }else{
    //                 console.log("chau")
    //         }
    //     }
    // });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
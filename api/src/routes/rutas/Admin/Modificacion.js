const {Eventos} = require("../../../db");

// modificacion del evento
async function modificacion (req, res){
    const { id } = req.params;
    const { title, shortDescription, longDescription, date, organizer, place, state, approved, pending} = req.body;

    try {
        let publicacion = await Eventos.findOne({
            where: {
              id: id,
            },
          });
        if (publicacion) {
            await Eventos.update({title, shortDescription, longDescription, date, organizer, place, state, approved, pending},
                { where: { id: id } }
            );
        }
        else {
            await Eventos.update(
                {title, shortDescription, longDescription, date, organizer, place, state, approved, pending},
                { where: { id: id } }
            );

        }
        res.status(200).send("se edito con exito");

    } catch (error) {
        console.log(error);
    }
};

module.exports = modificacion
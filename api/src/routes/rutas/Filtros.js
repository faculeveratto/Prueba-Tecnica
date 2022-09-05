const Router = require("express");
const { Eventos } = require("../../db");
const router = Router();

router.post("/", async (req, res) => {

  try {
    let forFilter = await Eventos.findAll();

    const { byTitle, byData, byState} = req.body;

      
      
    if (byTitle !== null) {
        forFilter = forFilter.filter((el) => el.title === byTitle);
              }
        
    if (byData !== null) {
        forFilter = forFilter.filter((el) => el.date === byData);
              }

    if (byState !== null) {
        forFilter = forFilter.filter((el) => el.state === byState);
             }
    
    if (forFilter.length !== 0) res.send(forFilter);
    else res.send ([])
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
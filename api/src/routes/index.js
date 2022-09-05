const { Router } = require('express');
const { evento } = require('../controllers/eventos');
const { users } = require('../controllers/users');
const admin = require('./rutas/Admin/Eventos');
const modificacion = require('./rutas/Admin/Modificacion');
const nuevoEvento = require('./rutas/postNuevoEvento');
const inscripto = require('./rutas/Users/putInscripto');
const visualizacionUsers = require('./rutas/Users/Eventos');
const filtros = require('./rutas/Filtros')
const FiltrosInscripto = require('./rutas/FiltrosInscriptos');
const { eventosID } = require('../controllers/eventosId');


const router = Router();

//ruta para cargar los eventos a la base de datos
router.get("/eventos", evento)
router.get("/eventos/:id", eventosID)
//ruta para cargar los usuarios a la base de datos
router.get("/users", users)

//ruta para crear un nuevo evento
router.use("/nuevo", nuevoEvento)

router.use('/filtrosInscriptos', FiltrosInscripto)

///////////ADMINISTRADOR///////////
router.get('/admin/eventos', admin)
router.put('/admin/modificacion/:id', modificacion)
router.use('/filtros', filtros)

///////////USUARIOS///////////
router.use("/inscripto", inscripto)
router.get('/user/eventos', visualizacionUsers)



module.exports= router;
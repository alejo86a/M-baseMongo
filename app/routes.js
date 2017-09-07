const path = require('path');
const Router = require('express').Router;
const router = new Router();

// Se importa el api ya establecida para el modelo en Router.js
const datos = require('./Model/router');

// Peticion de prueba, como se puede ver sera '/'-> debe retornar pong, es decir,
// un get a localhost:3000/  retorna pongp
router.route('/')
  .get((req, res) => {
    res.json({
      message: 'Pong'
    });
  });


  /**
   * Se establere rutas para el modelo, es decir, todo lo configurado en el modelo se agrega a el router
   * principal. 
   * Si hacemos un get a localhost:3000/datos/etiqueta1 , retorna el dato que este en la BD con el 
   * atributo etiqueta = 'etiqueta 1'
   */
router.use('/datos', datos);


module.exports = router;
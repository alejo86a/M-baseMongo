const path = require('path');
const config = require(path.resolve(__dirname, './constant'));
const routes = require(path.resolve(__dirname, './routes'));
const express = require('express');

const bodyParser = require('body-parser');
const compression = require('compression');
const errorhandler = require('errorhandler');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

module.exports = (app) => {
  app.set('port', config.server.port);

  // Middleware para manejar Json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Vuelve mas ligeras las peticiones
  app.use(compression());
  // Seguridad basica
  app.use(helmet());
  // Configura los cors
  app.use(cors()); 

  //Logger de la aplicacion
  app.use(morgan('tiny'));

  //Se agregan las rutas a '/'
  app.use('/', routes);
};

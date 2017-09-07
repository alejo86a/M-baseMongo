const mongoose = require('mongoose');
const bluebird = require('bluebird');
const path = require('path');

// Para obtener la ruta de mongo
const config = require(path.resolve(__dirname, './constant'));
// Promesa para mongo
mongoose.Promise = bluebird;
//Se conecta con MongoDB
mongoose.connect(config.mongo.url, {
  useMongoClient: true
}).then(function() {
  console.log('Mongo online!');
});

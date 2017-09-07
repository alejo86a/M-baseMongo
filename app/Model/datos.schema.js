const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esquema de la base de datos
const DatosSchema = new Schema({
  etiqueta: {type: String},
  Numeros: {type: String , required:true} 
});

module.exports = mongoose.model('Datos', DatosSchema);
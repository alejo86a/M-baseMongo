const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DatosSchema = new Schema({
  etiqueta: {type: String},
  Numeros: {type: String , required:true}
});
module.exports = mongoose.model('Datos', DatosSchema);
//Se importa el esquema al cual se le hara el api
const datos = require('./datos.schema');
// se necesita para el manejo de rutas
const Router = require('express').Router;

/**
 * http://mongoosejs.com/docs/models.html -> ver metodos de mongoose
 * https://coursework.vschool.io/mongoose-crud/ -> ejemplo
 */

const router = new Router();
router.route('/')
  .post((req, res) => {
    //Se crea una nueva instancia del esquema
    const newDato=new datos(req.body)
    // Asi se guarda en mongoDb
    newDato.save((err, dato) => {
      if(err) {
        res.send(err);
      }
      else { //If no errors, send it back to the client
        res.json({message:'Datos Cargados', dato });
      }
    });
    return res.status(200);
  })
  .get((req,res)=>{
   datos.find().exec(function(err,dato){
      res.send(dato);
   });

  });

  //Se hace otras rutas , en este caso se va a buscar por medio del parametro etiqueta
  router.route('/:etiqueta')
    .get((req, res) => {
      var etiqueta=req.params.etiqueta;// se obtiene el parametros
      //Metodo en mongo para buscar el primero con X atributo
      datos.findOne({'etiqueta':etiqueta}).exec(function(err,dato){
         res.send(dato);
      });
    });

module.exports = router;

//Constantes de la App
const constant = {
  server: {
    port: process.env.PORT || 3000
  }, mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/programa1'
  }
};
module.exports = constant;

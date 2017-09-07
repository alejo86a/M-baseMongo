const colors = require('chalk');
const express = require('express');
const app = express();
//Se configura el servidor 'express'
require('./app/config.express')(app);
require('./app/db.config');

const port = 8080;
app.listen(port, () => {
    console.log(colors.green(`Estamos corriendo en ${port}`, colors.green('✓')));
});

module.exports= app ;
//Importar express router
const express = require("express");
//Creamos routes
const routes = express.Router();

//llamamos las rutas
const amortizacionController = require("../controllers/amortizacionController");

module.exports = function(){
    routes.get("/", amortizacionController.home );

    return routes;
}  
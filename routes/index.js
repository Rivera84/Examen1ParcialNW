//Importar express router
const express = require("express");
//Creamos routes
const routes = express.Router();

//llamamos las rutas
const prestamoController = require("../controllers/prestamosController");

module.exports = function(){
    routes.get("/prestamo", prestamoController.metodoFrances);
    routes.post("/prestamo",prestamoController.mostrarMetodoFrances)
    return routes;
}  
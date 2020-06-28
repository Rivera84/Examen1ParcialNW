//Importamos express
const express = require("express");

//Importamos la rutas
const routes = require("./routes");

//Importar Handlebars
const exphbs = require("express-handlebars");

const bodyParser = require("body-parser")

//creamos el servidor
const app = express();


//Indicar el template engine a utilizar (Handlebars)
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs"
  }));
  
  app.set("view engine", "hbs");
  app.use(bodyParser.urlencoded({ extended:true}));

//Indicamos a express donde estan las rutas del servidor
app.use("/", routes())


//indicamos el puerto en el que se trabajara
app.listen(7000, () =>{
    console.log("Servidor iniciado");
});
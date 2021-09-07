//importando la biblioteca express
//importing express library 
const express = require('express')
const path = require('path'); // ayuda a que en funcion del sistema operativo construyamos la ruta adecuada
const { allowedNodeEnvironmentFlags } = require('process');

// Crear una aplicacion web
//Create a web application
const app = express();

//Establecer un middleware que configure donde se encuentran los recursos
//publicos
//Establishing a middleware to set where the public sources are
app.use(express.static(path.join(__dirname,'public')))

//Building the most general path 
//Construyendo la ruta lo mas general general posible Recurso tiene el nombre de 'recurso'
app.get('/mipagina',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

//listening in the port 8080
//Escuchando peticiones
app.listen(8080,()=>{
    console.log("Servidor online en el puerto 8080")
})


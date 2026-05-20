import mongoose from 'mongoose'; //libreria para conectarse con mongodb
import dotenv from 'dotenv'; //liberia para poder llamar mi archivo .env
import express from 'express'; //libreria para crear el servidor
import cors from 'cors'; //libreria para seguridad en el server
import { test } from './backend/controllers/alumnos.controllers.js'; //importando el controlador

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Funciono la base de datos"))
.catch((error) => console.log("No jalo esta madre"))

//creando un servidor local
//puerto 4000 o 8000
const app = express(); 
app.use(cors()); 

app.listen(4000, () => console.log("funciona el servidor"))
test();

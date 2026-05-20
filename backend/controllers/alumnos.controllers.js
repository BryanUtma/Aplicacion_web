import { TablaAlumnos } from "../models/alumnos.models.js";

TablaAlumnos.create({
    nombre: "Panfilo",
    calificacion: 5,
    materia: "Matematicas"
})

export const test = () => console.log("Si se está llamando al controlador correctamente");

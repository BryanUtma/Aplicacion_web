import {Schema, model} from "mongoose";

const EsquemaAlumnos = new Schema({
    nombre: String,
    calificacion: Number,
    materia: String
}) //esqueletos o campos de una tabla

//creacion de la tabla
export const TablaAlumnos = new model("Tabla de alumnos reprobados", EsquemaAlumnos)
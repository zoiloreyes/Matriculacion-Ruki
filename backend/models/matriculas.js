const mongoose = require("mongoose"),
      matriculasSchema = new mongoose.Schema({
         nombre: {
            type: String,
            required: true
         },
         apellido: {
            type: String,
            required: true
         },
         nacimiento: {
            type: String,
            required: true
         },
         lugarNacimiento: {
            type: String,
            required: true
         },
         genero: {
            type: String,
            required: true
         },
         correo: {
            type: String,
            required: true,
            unique: true
         },
         identificacion: {
            type: String,
            required: true,
            unique: true
         },
         direccion: {
            type: String,
            required: true
         },
         telefono: {
            type: String,
            required: true
         },
         aceptado: Boolean
      });

module.exports = mongoose.model("Matriculas", matriculasSchema);
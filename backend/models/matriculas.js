const mongoose = require("mongoose"),
      validators = require("../helpers/validators"),
      matriculasSchema = new mongoose.Schema({
         nombre: {
            type: String,
            required: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         apellido: {
            type: String,
            required: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         nacimiento: {
            type: String,
            required: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         lugarNacimiento: {
            type: String,
            required: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         genero: {
            type: String,
            required: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         correo: {
            type: String,
            required: true,
            unique: true,
            validate: {
               validator: validators.isValidEmail,
               message: "Invalid email"
            }
         },
         identificacion: {
            type: String,
            required: true,
            unique: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         direccion: {
            type: String,
            required: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         telefono: {
            type: String,
            required: true,
            validate: {
               validator: validators.isNotEmpty,
               message: "All the fields are required"
            }
         },
         aceptado: Boolean
      });

module.exports = mongoose.model("Matriculas", matriculasSchema);
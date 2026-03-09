/**
 * Modelo de datos para Users.
 *
 * Este archivo define la estructura que tendrán los documentos de usuarios
 * en la base de datos MongoDB, utilizando Mongoose.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Definición del esquema de usuario.
 *
 * Cada usuario tendrá los siguientes campos:
 *nombre: { type: String, required: true },
 *email: { type: String, required: true, unique: true },
 *password: { type: String, required: true }
 */
const UsuarioSchema = new Schema({
   nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});



/**
 * Exportamos el modelo para poder usarlo en otros archivos (controladores, rutas).
 * El primer parámetro es el nombre de la colección ('Uusarios),
 * y el segundo es el esquema definido anteriormente.
 */
module.exports = mongoose.model('Usuario', UsuarioSchema);

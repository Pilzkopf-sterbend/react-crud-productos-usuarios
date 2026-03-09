/**
 * Modelo de datos para products.
 *
 * Este archivo define la estructura que tendrán los documentos de products
 * en la base de datos MongoDB, utilizando Mongoose.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Definición del esquema de producto.
 *
 * nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
 */
const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
});

/**
 * Exportamos el modelo para poder usarlo en otros archivos (controladores, rutas).
 * El primer parámetro es el nombre de la colección ('Producto'),
 * y el segundo es el esquema definido anteriormente.
 */
module.exports = mongoose.model('Producto', ProductoSchema);

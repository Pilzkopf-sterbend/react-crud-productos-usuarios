/**
 * Módulo de rutas para la entidad Producto.
 * 
 * Utilizamos el módulo `express` para crear un enrutador que define las rutas
 * del backend relacionadas con losproducts. Estas rutas serán consumidas 
 * desde el cliente (por ejemplo, Angular).
 */

// Importamos express para usar su Router
const express = require('express');
const router = express.Router();

// Importamos el controlador que contiene la lógica de negocio
const productoCtrl = require('../controllers/producto.controller');

/**
 * Rutas disponibles para el recurso producto.
 * Cada una se asocia con una función definida en el controlador correspondiente.
 */

// Obtener todos los products
// GET http://localhost:3000/api/products
router.get('/', productoCtrl.getProductos);

// Crear un nuevo empleado
// POST http://localhost:3000/api/products
router.post('/', productoCtrl.createProductos);

// Obtener un empleado por su ID
// GET http://localhost:3000/api/products/:id
router.get('/:id', productoCtrl.getUnicoProducto);

// Actualizar un empleado por su ID
// PUT http://localhost:3000/api/products/:id
router.put('/:id', productoCtrl.editarProducto);

// Eliminar un empleado por su ID
// DELETE http://localhost:3000/api/products/:id
router.delete('/:id', productoCtrl.eliminarProducto);

// Exportamos el enrutador para ser usado en index.js
module.exports = router;

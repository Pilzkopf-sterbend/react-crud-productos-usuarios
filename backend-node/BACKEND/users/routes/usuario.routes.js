/**
 * Módulo de rutas para la entidad Empleado.
 * 
 * Utilizamos el módulo `express` para crear un enrutador que define las rutas
 * del backend relacionadas con los empleados. Estas rutas serán consumidas 
 * desde el cliente (por ejemplo, Angular).
 */

// Importamos express para usar su Router
const express = require('express');
const router = express.Router();

// Importamos el controlador que contiene la lógica de negocio
const usuarioCtrl = require('../controllers/usuario.controller');

/**
 * Rutas disponibles para el recurso usuario.
 * Cada una se asocia con una función definida en el controlador correspondiente.
 */

// Obtener todos los empleados
// GET http://localhost:3000/api/users
router.get('/', usuarioCtrl.getUsuarios);

// Crear un nuevo empleado
// POST http://localhost:3000/api/empleados
router.post('/', usuarioCtrl.createUsuarios);

// Obtener un empleado por su ID
// GET http://localhost:3000/api/empleados/:id
router.get('/:id', usuarioCtrl.getUnicoUsuario);

// Actualizar un empleado por su ID
// PUT http://localhost:3000/api/empleados/:id
router.put('/:id', usuarioCtrl.editarUsuario);

// Eliminar un empleado por su ID
// DELETE http://localhost:3000/api/empleados/:id
router.delete('/:id', usuarioCtrl.eliminarUsuario);

// Exportamos el enrutador para ser usado en index.js
module.exports = router;

/**
 * Controlador de users
 *
 * Este módulo define las funciones (métodos) que permiten gestionar usuarios
 * mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
 * 
 * Primero se importa el modelo de Mongoose para acceder a la base de datos.
 */

const Usuario = require('../models/usuario'); // Importamos el modelo
const usuarioCtrl = {}; // Creamos el objeto controlador

/**
 * Obtener todos los usuarios.
 * Método: GET
 * Ruta: /api/users
 */
usuarioCtrl.getUsuarios = async (req, res) => {
    const Usuarios = await Usuario.find(); // Busca todos los registros
    res.json(Usuarios); // Devuelve el resultado como JSON
};

/**
 * Crear un nuevo usuario.
 * Método: POST
 * Ruta: /api/users
 */
usuarioCtrl.createUsuarios = async (req, res) => {
    try {
    // ⚠️ Eliminar el _id si es una cadena vacía
    if (req.body._id === '') {
      delete req.body._id;
    }

    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtener un único usuario por su ID.
 * Método: GET
 * Ruta: /api/usuarios/:id
 */
usuarioCtrl.getUnicoUsuario = async (req, res) => {
    const usuarioUnico = await Usuario.findById(req.params.id); // Busca por ID
    res.json(usuarioUnico); // Devuelve el empleado encontrado
};

/**
 * Actualizar un usuario por su ID.
 * Método: PUT
 * Ruta: /api/users/:id
 */
usuarioCtrl.editarUsuario = async (req, res) => {
    const { id } = req.params;
    const usuarioEditado = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
        
    };
    await Usuario.findByIdAndUpdate(id, { $set: usuarioEditado }, { new: true }); // Actualiza el documento
    res.json({ status: 'Usuario Actualizado' });
};

/**
 * Eliminar un usuario por su ID.
 * Método: DELETE
 * Ruta: /api/users/:id
 */
usuarioCtrl.eliminarUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id); // Elimina el documento
    res.json({ status: 'Usuario Eliminado' });
};

// Exportamos el controlador para ser usado en las rutas
module.exports = usuarioCtrl;

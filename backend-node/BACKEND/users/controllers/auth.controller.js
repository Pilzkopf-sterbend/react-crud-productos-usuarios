
const Usuario = require('../models/usuario.js');
const bcrypt = require('bcryptjs');

// 👉 Registrar usuario
exports.registrar = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Validar campos
    if (!nombre || !email || !password) {
      return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
    }

    // Verificar si el usuario ya existe
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ msg: 'El usuario ya existe' });

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear y guardar el usuario
    const usuario = new Usuario({ nombre, email, password: hashedPassword });
    await usuario.save();

    res.status(201).json({
      msg: 'Usuario registrado correctamente',
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email
      }
    });
  } catch (error) {
    console.error('🔥 Error en registrar:', error);
    res.status(500).json({
      msg: 'Error en el servidor',
      error: error.message || error.toString()
    });
  }
};

// 👉 Login sin token
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar datos
    if (!email || !password) {
      return res.status(400).json({ msg: 'Debe ingresar email y contraseña' });
    }

    // Buscar el usuario
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(400).json({ msg: 'Usuario no encontrado' });// contraseña o usuario incorrecto

    // Comparar contraseñas
    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(401).json({ msg: 'Credenciales inválidas' }); // contraseña o usuario incorrecto

    // ✅ Devolver datos del usuario (sin token)
    res.json({
      msg: 'Login exitoso',
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email
      }
    });
  } catch (error) {
    console.error('🔥 Error en login:', error);
    res.status(500).json({
      msg: 'Error en el servidor',
      error: error.message || error.toString()
    });
  }
};

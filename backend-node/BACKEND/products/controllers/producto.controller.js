/**
 * Controlador de products
 *
 * Este módulo define las funciones (métodos) que permiten gestionar products
 * mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
 * 
 * Primero se importa el modelo de Mongoose para acceder a la base de datos.
 */

const Producto = require('../models/producto'); // Importamos el modelo
const productoCtrl = {}; // Creamos el objeto controlador

/**
 * Obtener todos los products.
 * Método: GET
 * Ruta: /api/products
 */
productoCtrl.getProductos = async (req, res) => {
    const Productos = await Producto.find(); // Busca todos los registros
    res.json(Productos); // Devuelve el resultado como JSON
};

/**
 * Crear un nuevo producto.
 * Método: POST
 * Ruta: /api/products
 */
productoCtrl.createProductos = async (req, res) => {
  try {
    if (req.body._id === '') {
      delete req.body._id;
    }

    const producto = new Producto(req.body);
    await producto.save();

    res.status(201).json(producto); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
/**
 * Obtener un único producto por su ID.
 * Método: GET
 * Ruta: /api/products/:id
 */
productoCtrl.getUnicoProducto = async (req, res) => {
    const productoUnico = await Producto.findById(req.params.id); // Busca por ID
    res.json(productoUnico); // Devuelve el producto encontrado
};

/**
 * Actualizar un producto por su ID.s
 * Método: PUT
 * Ruta: /api/products/:id
 */
productoCtrl.editarProducto = async (req, res) => {
    const { id } = req.params;
    const productoEditado = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio
    };
    await Producto.findByIdAndUpdate(id, { $set: productoEditado }, { new: true }); // Actualiza el documento
    res.json({ status: 'Producto Actualizado' });
};

/**
 * Eliminar un producto por su ID.
 * Método: DELETE
 * Ruta: /api/products/:id
 */
productoCtrl.eliminarProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id); // Elimina el documento
    res.json({ status: 'Producto Eliminado' });
};

// Exportamos el controlador para ser usado en las rutas
module.exports = productoCtrl;

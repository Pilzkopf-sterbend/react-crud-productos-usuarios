// Importamos React y los hooks necesarios
import React from "react";


function  ProductList({  product, onEdit, onDeleted }) {

  // -------------------- FUNCIÓN ELIMINAR --------------------
  // handleDelete recibe el ID del productoa eliminar.
  // Pide confirmación al usuario y, si acepta, envía la solicitud DELETE al backend.
  const handleDelete = (id) => {
    // Confirmación para evitar eliminaciones accidentales
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;

    // Petición DELETE al servidor
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Producto eliminado"); // Mensaje de confirmación
        onDeleted(); // Recargamos la lista desde el componente padre (App)
      })
      .catch((err) => console.error("Error al eliminar:", err));
  };

  // -------------------- RENDERIZADO --------------------
  // Muestra un mensaje si no hay productos o una tabla si existen registros.
  return (
    <div>
      <h2>Lista de Productos</h2>

      {/* Si no hay productos, mostrar un mensaje */}
      { product.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        // Si hay productos, renderizamos una tabla HTML sencilla
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>opciones</th>
              
            </tr>
          </thead>

          <tbody>
            {/* Recorremos el arreglo de productos */}
            { product.map((pro) => (
              // Cada fila debe tener una key única (usamos emp._id)
              <tr key={pro._id}>
                <td>{pro.nombre}</td>
                <td>{pro.descripcion}</td>
                <td>{pro.categoria}</td>
                <td>${pro.precio}</td>
                <td>
                  {/* Botón Editar: llama a onEdit pasando el peoducto seleccionado */}
                  <button onClick={() => onEdit(pro)}>Editar</button>

                  {/* Botón Eliminar: llama a handleDelete con el ID del prodcuto */}
                  <button
                    onClick={() => handleDelete(pro._id)}
                    style={{ marginLeft: "10px" }} // Espacio visual entre botones
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Exportamos el componente para que pueda usarse en App.js u otros componentes
export default  ProductList;

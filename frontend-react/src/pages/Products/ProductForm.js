// Importamos React y los hooks necesarios desde la biblioteca
import React, { useState, useEffect } from "react";


function ProductForm({ productToEdit, onSaveComplete }) {

  // -------------------- ESTADOS --------------------
  
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  // -------------------- EFECTO DE SINCRONIZACIÓN --------------------
  
  useEffect(() => {
    if (productToEdit) {
      // Precargar datos del producto seleccionado
      setNombre(productToEdit.nombre);
      setDescripcion(productToEdit.descripcion);
      setCategoria(productToEdit.categoria);
      setPrecio(productToEdit.precio);
    } else {
      // Limpiar el formulario para crear uno nuevo
      setNombre("");
      setDescripcion("");
      setCategoria("");
      setPrecio("");
    }
  }, [productToEdit]); // Se vuelve a ejecutar si cambia productoEdit

  // -------------------- MANEJO DEL ENVÍO --------------------
  //
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el navegador recargue la página por defecto.

    // Construimos un objeto con los datos del formulario
    const newProduct = { nombre, descripcion, categoria, precio};

    // Determinamos si el formulario está en modo edición o creación
    const method = productToEdit ? "PUT" : "POST";
    const url = productToEdit
      ? `http://localhost:3000/api/products/${productToEdit._id}` // Actualizar
      : "http://localhost:3000/api/products"; // Crear nuevo

    // -------------------- PETICIÓN FETCH --------------------
    // Enviamos los datos al backend (Node.js / Express)
    fetch(url, {
      method, // PUT o POST según el caso
      headers: { "Content-Type": "application/json" }, // Indicamos que el cuerpo es JSON
      body: JSON.stringify(newProduct), // Convertimos el objeto a texto JSON
    })
      .then((res) => res.json()) // Convertimos la respuesta a formato JSON
      .then((data) => {

        // -------------------- MENSAJE USUARIO --------------------
        
        const nombreMostrar = data.nombre || nombre;

        alert(
          productToEdit
            ? `Producto ${nombreMostrar} actualizado`
            : `Producto ${nombreMostrar} creado`
        );

        // -------------------- LIMPIAR FORMULARIO --------------------
        // Esto garantiza que el formulario se resetee después de crear o editar
        setNombre("");
        setDescripcion("");
        setCategoria("");
        setPrecio("");

        // -------------------- NOTIFICAR AL PADRE --------------------
        // Permite refrescar la lista y limpiar selección en App.js
        onSaveComplete();
      })
      .catch((err) => console.error("Error:", err)); // Captura y muestra errores en consola
  };

  // -------------------- RENDERIZADO DEL FORMULARIO --------------------
  // Se muestran los campos de entrada controlados y un botón dinámico.
  // El texto del botón y el título cambian según si se está creando o editando un empleado.
  return (
    <form onSubmit={handleSubmit}>
      {/* Título dinámico del formulario */}
      <h2>{productToEdit ? "Editar Producto" : "Agregar Producto"}</h2>

      {/* Campo de texto: Nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      {/* Campo de texto: Descripcion*/}
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />

      {/* Campo de texto: Categoria*/}
      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      />

      {/* Campo numérico: Precio */}
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />

      {/* Botón dinámico (cambia texto según acción) */}
      <button type="submit">
        {productToEdit ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
}

// Exportamos el componente para que pueda ser importado en otros archivos
export default ProductForm;

// Importamos React y los hooks necesarios
import React from "react";

function UsersList({ user, onEdit, onDeleted }) {


    const handleDelete = (id) => {

        if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;


        fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                alert("Usuario  eliminado");
                onDeleted();
            })
            .catch((err) => console.error("Error al eliminar:", err));
    };


    return (
        <div>
            <h2>Lista de Usuarios</h2>

            { }
            {user.length === 0 ? (
                <p>No hay usuarios registrados.</p>
            ) : (

                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>opciones</th>



                        </tr>
                    </thead>

                    <tbody>
                        { }
                        {user.map((pro) => (

                            <tr key={pro._id}>
                                <td>{pro.nombre}</td>
                                <td>{pro.email}</td>
                                <td>{pro.password}</td>

                                <td>
                                    { }
                                    <button onClick={() => onEdit(pro)}>Editar</button>

                                    { }
                                    <button
                                        onClick={() => handleDelete(pro._id)}
                                        style={{ marginLeft: "10px" }}
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


export default UsersList;

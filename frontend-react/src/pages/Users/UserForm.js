
import React, { useState, useEffect } from "react";


function UsersForm({ userToEdit, onSaveComplete }) {


    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        if (userToEdit) {

            setNombre(userToEdit.nombre);
            setEmail(userToEdit.email);
            setPassword(userToEdit.password);

        } else {

            setNombre("");
            setEmail("");
            setPassword("");

        }
    }, [userToEdit]);


    const handleSubmit = (e) => {
        e.preventDefault();


        const newUser = { nombre, email, password };


        const method = userToEdit ? "PUT" : "POST";
        const url = userToEdit
            ? `http://localhost:3000/api/users/${userToEdit._id}`
            : "http://localhost:3000/api/users";


        fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {


                const nombreMostrar = data.nombre || nombre;

                alert(
                    userToEdit
                        ? `Usuario ${nombreMostrar} actualizado`
                        : `Usuario ${nombreMostrar} creado`
                );


                setNombre("");
                setEmail("");
                setPassword("");


                onSaveComplete();
            })
            .catch((err) => console.error("Error:", err));
    };


    return (
        <form onSubmit={handleSubmit}>
            { }
            <h2>{userToEdit ? "Editar Usuario" : "Agregar Usuario"}</h2>

            { }
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />

            { }
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            { }
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />


            { }
            <button type="submit">
                {userToEdit ? "Actualizar" : "Guardar"}
            </button>
        </form>
    );
}


export default UsersForm;

import React from "react";

function Home() {
    return (
        <div className="container mt-5">

            <div className="text-center mb-5">
                <h1 className="display-4">CRUD React</h1>
                <p className="lead">
                    Esta aplicación es un sistema CRUD desarrollado con React que permite
                    gestionar usuarios y productos mediante una interfaz web moderna.
                </p>
            </div>

            <div className="card shadow p-4">
                <h3 className="mb-3">Tecnologías utilizadas</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>React</b> para construir la interfaz.</li>
                    <li className="list-group-item"><b>React DOM</b> para renderizar los componentes.</li>
                    <li className="list-group-item"><b>React Router DOM</b> para navegación entre páginas.</li>
                    <li className="list-group-item"><b>Bootstrap</b> para el diseño visual.</li>
                    <li className="list-group-item"><b>React Scripts</b> para ejecutar y compilar la app.</li>
                    <li className="list-group-item"><b>Testing Library</b> para pruebas.</li>
                    <li className="list-group-item"><b>Web Vitals</b> para medir rendimiento.</li>
                </ul>
            </div>

            <div className="mt-5">
                <h4>Descripción del sistema</h4>
                <p>
                    Este proyecto implementa un sistema CRUD (Crear, Leer, Actualizar y Eliminar)
                    desarrollado con React que permite administrar información de usuarios
                    y productos desde una interfaz sencilla y funcional.
                </p>
            </div>

        </div>
    );
}

export default Home;
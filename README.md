# 📦 Sistema CRUD de Productos y Usuarios (React + Node.js)

Este proyecto consiste en una aplicación **Full Stack** que permite
gestionar **usuarios y productos** mediante operaciones CRUD (Crear,
Leer, Actualizar y Eliminar).

El sistema está dividido en dos partes principales:

-   **Frontend:** React.js
-   **Backend:** Node.js + Express
-   **Autenticación:** bcryptjs
-   **Comunicación:** API REST

------------------------------------------------------------------------

# 📚 Propósito del proyecto

El objetivo de este proyecto es desarrollar una aplicación web que
permita:

-   Gestionar **usuarios**
-   Gestionar **productos**
-   Implementar **autenticación básica**
-   Consumir una **API REST**
-   Integrar **frontend y backend**

Este proyecto fue desarrollado como **evidencia de aprendizaje en
desarrollo de software**, aplicando conceptos de:

-   Arquitectura cliente-servidor
-   CRUD
-   APIs REST
-   Seguridad básica con encriptación de contraseñas

------------------------------------------------------------------------

# 🏗 Arquitectura del sistema

El sistema funciona con la siguiente arquitectura:

Frontend (React) │ │ Peticiones HTTP (Fetch / JSON) ▼ Backend (Node.js +
Express) │ ▼ Base de datos

### Flujo de funcionamiento

1.  El usuario interactúa con la interfaz en **React**.
2.  El frontend envía solicitudes HTTP al backend.
3.  El backend procesa la solicitud.
4.  El backend consulta la base de datos.
5.  Se devuelve una respuesta en **JSON**.
6.  El frontend actualiza la interfaz.

------------------------------------------------------------------------

# 🧰 Tecnologías utilizadas

## Frontend

-   React.js
-   React Router DOM
-   JavaScript
-   CSS
-   Fetch API

## Backend

-   Node.js
-   Express.js
-   bcryptjs
-   JSON Web Token (JWT)

------------------------------------------------------------------------

# 🔗 Endpoints de la API

Base URL:

http://localhost:3000

## 👤 Usuarios

  Método   Endpoint             Descripción
  -------- -------------------- ----------------------------
  POST     /api/auth/register   Registrar usuario
  POST     /api/auth/login      Iniciar sesión
  GET      /api/users           Obtener todos los usuarios
  POST     /api/users           Crear usuario
  PUT      /api/users/:id       Actualizar usuario
  DELETE   /api/users/:id       Eliminar usuario

## 📦 Productos

  Método   Endpoint            Descripción
  -------- ------------------- -----------------------------
  GET      /api/products       Obtener todos los productos
  POST     /api/products       Crear producto
  PUT      /api/products/:id   Actualizar producto
  DELETE   /api/products/:id   Eliminar producto

------------------------------------------------------------------------

# 📁 Estructura del proyecto

react-crud-productos/

src/ components/ Navbar.js

pages/ Home.js

Products/ ProductForm.js ProductList.js

Users/ UserForm.js UserList.js

App.js App.css index.js

package.json

------------------------------------------------------------------------

# ⚙ Requisitos del sistema

Debes tener instalado:

-   Node.js 18 o superior
-   npm
-   Backend ejecutándose en:

http://localhost:3000

------------------------------------------------------------------------

# 🚀 Instalación

Clonar repositorio:

git clone https://github.com/Pilzkopf-sterbend/react-crud-productos-usuarios.git

Entrar al proyecto:

cd react-crud-productos

Instalar dependencias:

npm install

Ejecutar el frontend:

npm start

El frontend se ejecutará en:

http://localhost:3001

------------------------------------------------------------------------

# 🔐 Autenticación

El sistema incluye:

-   Registro de usuario
-   Inicio de sesión
-   Encriptación de contraseñas con **bcryptjs**

------------------------------------------------------------------------

# 📌 Funcionalidades

## Usuarios

-   Crear usuarios
-   Listar usuarios
-   Editar usuarios
-   Eliminar usuarios

## Productos

-   Crear productos
-   Listar productos
-   Editar productos
-   Eliminar productos

------------------------------------------------------------------------

# ⚠ Problemas comunes

## Error CORS

En el backend habilitar:

const cors = require("cors"); app.use(cors());

## No conecta con la API

Verificar que el backend esté en:

http://localhost:3000

------------------------------------------------------------------------

# 👨‍💻 Autor

Pilzkopf-sterbend

Proyecto académico de **Desarrollo de Software**

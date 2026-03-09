# 🚀 API REST - Usuarios y Productos

Este proyecto es una **API REST desarrollada con Node.js, Express y MongoDB**, que permite la gestión de **usuarios** (registro, login y CRUD) y **productos** (CRUD completo).

Está pensada como backend para aplicaciones frontend (Angular, React, etc.) y como proyecto académico/práctico para aprender arquitectura REST.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **bcryptjs** (encriptación de contraseñas)
- **cors**
- **morgan**
- **nodemon** (desarrollo)

---

## 📁 Estructura del proyecto

```bash
BACKEND/
│
├── products/
│   ├── controllers/
│   │   └── producto.controller.js
│   ├── models/
│   │   └── producto.js
│   └── routes/
│       └── producto.routes.js
│
├── users/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── usuario.controller.js
│   ├── models/
│   │   └── usuario.js
│   └── routes/
│       ├── auth.routes.js
│       └── usuario.routes.js
│
├── database.js
├── index.js
├── package.json
└── README.md
```

---

## 🔌 Conexión a la base de datos

La conexión a MongoDB se realiza en el archivo:

```bash
BACKEND/database.js
```

Ejemplo:

```js
const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/app_web_node_085';

mongoose.connect(URI)
  .then(() => console.log('✅ Base de datos conectada'))
  .catch(err => console.error('❌ Error DB:', err));

module.exports = mongoose;
```

> 📌 MongoDB crea la base de datos y colecciones **automáticamente cuando se insertan datos**.

---

## ▶️ Instalación y ejecución

### 1️⃣ Instalar dependencias

```bash
npm install
```

### 2️⃣ Ejecutar el servidor

```bash
npm run dev
```

El servidor se inicia en:

```
http://localhost:3000
```

---

## 🔐 Endpoints de Autenticación

### 🔸 Registrar usuario

**POST**
```
/api/auth/register
```

Body (JSON):
```json
{
 "nombre": "Camisa",
  "descripcion": " Roja",
  "categoria": "Ropa",
  "precio": 3333,
}
```

---

### 🔸 Login

**POST**
```
/api/auth/login
```

Body (JSON):
```json
{
  "email": "carlos@gmail.com",
  "password": "123456"
}
```

---

## 👤 Endpoints de Usuarios

### Obtener todos los usuarios

**GET**
```
/api/users
```

### Obtener usuario por ID

**GET**
```
/api/users/:id
```

### Crear usuario

**POST**
```
/api/users
```

### Actualizar usuario

**PUT**
```
/api/users/:id
```

### Eliminar usuario

**DELETE**
```
/api/users/:id
```

---

## 📦 Endpoints de Productos

### Obtener todos los productos

**GET**
```
/api/products
```

### Obtener producto por ID

**GET**
```
/api/products/:id
```

### Crear producto

**POST**
```
/api/products
```

Body (JSON ejemplo):
```json
{
  "nombre": "Laptop Gamer",
  "precio": 3500,
  "descripcion": "RTX 4060"
}
```

### Actualizar producto

**PUT**
```
/api/products/:id
```

### Eliminar producto

**DELETE**
```
/api/products/:id
```

---

## 🧪 Pruebas

Las pruebas de la API se pueden realizar con:

- **Postman**
- **Insomnia**

Recuerda usar:

```
Headers:
Content-Type: application/json
```

---

## ⚠️ Errores comunes

- **404 Not Found** → Ruta incorrecta
- **500 Internal Server Error** → Error en controlador o modelo
- **Usuario ya existe** → Email duplicado

Revisa siempre la consola del backend para más detalles.

---

## 📌 Notas finales

- La API sigue el patrón **MVC (Modelo - Controlador - Rutas)**
- Las contraseñas se almacenan **encriptadas**
- No se usan tokens (JWT) por ahora

---

## ✍️ Autor

Proyecto desarrollado como práctica de **API REST con Node.js y MongoDB**.
--

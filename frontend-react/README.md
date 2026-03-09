# 📘 Frontend React — CRUD de Empleados (Consumo de API REST)

> **Este repositorio contiene ÚNICAMENTE el FRONTEND**.  
> El backend (Node.js + Express + MongoDB) vive en otro repositorio y expone la **API REST** que este frontend consume.

---

## 1) Propósito del proyecto

Este proyecto tiene dos objetivos:

1. **Entregar un frontend funcional en React** para un CRUD de empleados:  
   - Crear, listar, editar y eliminar empleados desde una interfaz web.
2. **Servir como guía paso a paso** para que cualquier aprendiz pueda construir su propio frontend React consumiendo una API REST existente.

---

## 2) Arquitectura (solo frontend + API)

**Frontend (React / CRA) — Puerto 3001**  
⬇ (Fetch API / HTTP JSON)  
**Backend (Node.js + Express) — Puerto 3000**  
⬇  
**MongoDB (Mongoose)**

> Este repositorio NO incluye el backend ni la base de datos.

---

## 3) Endpoints del Backend (API REST)

Este frontend asume que el backend expone los siguientes endpoints:

### Base URL
- `http://localhost:3000`

### Endpoints (Empleados)
- `GET    /api/empleados` → Lista todos los empleados
- `POST   /api/empleados` → Crea un empleado
- `PUT    /api/empleados/:id` → Actualiza un empleado (por id)
- `DELETE /api/empleados/:id` → Elimina un empleado (por id)

### Estructura esperada del objeto empleado
MongoDB/Mongoose normalmente retorna `_id`:

```json
{
  "_id": "65f1c0...",
  "name": "Ana Pérez",
  "position": "Analista",
  "office": "Medellín",
  "salary": 3500000
}
```

> Nota: si tu backend retorna `id` en lugar de `_id`, ajusta el frontend en la tabla (`key`) y en los endpoints `PUT/DELETE`.

---

## 4) Requisitos para ejecutar

- **Node.js 18+** (recomendado)
- **npm 9+**
- Backend ejecutándose en: `http://localhost:3000`

---

## 5) Instalación y ejecución (solo Frontend)

### 5.1 Instalar dependencias
En la carpeta del proyecto:

```bash
npm install
```

### 5.2 Ejecutar el frontend (puerto 3001)
```bash
npm start
```

- Frontend: `http://localhost:3001`
- Backend (debe estar arriba): `http://localhost:3000`

---

## 6) Estructura del proyecto (frontend)

Estructura típica (Create React App):

```
crud-react/
  src/
    components/
      EmployeeForm.js
      EmployeeList.js
    App.js
    index.js
    App.css
    index.css
  package.json
  README.md
```

---

## 7) Guía paso a paso para construir tu propio Frontend (desde cero)

> Esta sección es intencionalmente **detallada**, para que tus aprendices puedan replicar el proyecto.

### Paso 1 — Crear el proyecto React (Create React App)

```bash
npx create-react-app crud-react
cd crud-react
```

### Paso 2 — (Opcional) Instalar Bootstrap

```bash
npm install bootstrap
```

En `src/index.js` agrega:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

### Paso 3 — Crear la carpeta de componentes

Crea:

```
src/components/
```

### Paso 4 — Crear `EmployeeForm.js` (crear/editar)

Crea el archivo:
- `src/components/EmployeeForm.js`

Este componente debe:
- Manejar estado local (`useState`) para los campos
- Detectar si está en modo **crear** o **editar** con `employeeToEdit`
- Enviar `POST` o `PUT` según el caso
- Limpiar formulario al finalizar
- Llamar `onSaveComplete()` para que `App` refresque la tabla

📌 **Enlace/ubicación del archivo:** `src/components/EmployeeForm.js`

### Paso 5 — Crear `EmployeeList.js` (tabla del listado)

Crea el archivo:
- `src/components/EmployeeList.js`

Este componente debe:
- Recibir `employees` por props (estado centralizado en `App`)
- Renderizar tabla
- Botón Editar → llama `onEdit(emp)`
- Botón Eliminar → llama a `DELETE` y luego ejecuta `onDeleted()` para refrescar

📌 **Enlace/ubicación del archivo:** `src/components/EmployeeList.js`

### Paso 6 — Configurar `App.js` (orquestación)

Edita:
- `src/App.js`

`App` debe:
- Tener el estado `employees` (lista)
- Tener el estado `selectedEmployee` (editar)
- Implementar `fetchEmployees()` para consultar la API
- Llamar `fetchEmployees()` al iniciar con `useEffect`
- Pasar props a `EmployeeForm` y `EmployeeList`

📌 **Enlace/ubicación del archivo:** `src/App.js`

### Paso 7 — Estilos (App.css)

Edita o crea:
- `src/App.css`

Aquí puedes poner estilos “bonitos” tipo tarjeta para el formulario y la tabla.

📌 **Enlace/ubicación del archivo:** `src/App.css`

### Paso 8 — Probar el flujo completo (sin recargar)

1. Ejecuta backend (en otro repo):
   - `npm start` (o como lo tengas configurado)
2. Ejecuta frontend:
   - `npm start`
3. Prueba:
   - Crear empleado → debe aparecer de inmediato en la tabla
   - Editar empleado → debe reflejar cambios de inmediato
   - Eliminar empleado → debe desaparecer sin recargar

---

## 8) Configuración importante: CORS en el backend

Como el frontend corre en `http://localhost:3001` y el backend en `http://localhost:3000`, el backend debe permitir CORS.

En Express, ejemplo:

```js
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3001" }));
```

---

## 9) Problemas comunes y soluciones rápidas

### 9.1 “No refresca la tabla al crear/editar”
✅ Solución: el estado `employees` debe vivir en `App` y tras guardar se debe llamar `fetchEmployees()`.

### 9.2 “react-scripts no se reconoce”
✅ Solución:
```bash
npm install
npm start
```

### 9.3 “No conecta con la API”
- Verifica que el backend esté arriba en `http://localhost:3000`
- Verifica endpoints y CORS
- Abre consola (F12) y mira Network/Console

---

## 10) Próximos repos (recomendación de organización)

Para mantener orden y buenas prácticas, se recomienda trabajar en tres repositorios:

1. **Repo Backend** (API Node.js + MongoDB)
2. **Repo Frontend** (este repositorio)
3. **Repo Fullstack** (monorepo o carpeta con ambos para despliegue)

---

## 11) Autoría y uso

Proyecto con fines **académicos y formativos** para el aprendizaje de:
- React (componentes, estado, hooks)
- Consumo de APIs REST (Fetch)
- Integración frontend–backend
- Buenas prácticas de estructuración de proyectos

---


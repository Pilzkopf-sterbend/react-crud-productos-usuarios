const express = require('express');
const router = express.Router();
const { registrar, login } = require('../controllers/auth.controller');

router.post('/register', registrar);
router.post('/login', login);

module.exports = router;

// para probar esta aprte en postman se debe usar esta url: POST http://localhost:3000/api/auth/register para crear el usaurio
// y para login con el usaurio y contraseña con esta POST http://localhost:3000/api/auth/login
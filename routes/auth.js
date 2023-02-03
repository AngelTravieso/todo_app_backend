const { Router } = require('express');
const { check } = require('express-validator');
const { authTest, createUser } = require('../controllers/auth');
const { dbValidators } = require('../middlewares/dbValidators');


const router = Router();

router.get('/', authTest);

// Crear usuario
router.post('/', [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').notEmpty(),
    check('email', 'El email no es válido').isEmail(),
    // TODO validar email repetido
    check('password', 'La contraseña es obligatoria').notEmpty(),
    check('password', 'El password debe tener más de 6 letras').isLength({ min: 6}),

    dbValidators,
] , createUser);

module.exports = router;
const { Router } = require('express')

const { usuariosGet, usuarioPost } = require('../controllers/usuarios')

const router = Router();

router.get('/', usuariosGet);

router.get('/', usuarioPost)

module.exports = router;
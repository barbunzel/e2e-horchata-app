const router = require('express').Router();
const controlador = require('./controller');

router.get('/', controlador.listarBebidas);
router.post('/', controlador.insertarBebida);
router.get('/:id', controlador.listarBebida);
router.put('/:id', controlador.actualizarBebida);
router.delete('/:id', controlador.borrarBebida);

module.exports = router;

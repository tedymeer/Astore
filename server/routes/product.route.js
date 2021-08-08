const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const product = require('../controllers/product.controller');

router.post('/',auth.authenticate,product.create);

router.get('/list',auth.authenticate,product.list);

router.delete('/:id',auth.authenticate,product.delete);

router.put('/',auth.authenticate,product.update);

module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const product = require('../controllers/product.controller');

router.post('/',auth.authenticate,product.create);

router.get('/list',product.list);

router.delete('/:id',product.delete);

module.exports = router;
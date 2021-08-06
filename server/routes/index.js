const express = require('express');
const router = express.Router();

router.use('/admins', require('./admins.route'));
router.use('/product', require('./product.route'));

module.exports = router;
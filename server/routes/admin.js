const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')

router.post('/login',adminController.login);

router.post('/register',adminController.register)

//router.post('/add-product',apiAuth,adminController.addProduct)

module.exports = router;

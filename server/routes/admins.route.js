const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../controllers/admin.controller');

router.post('/login',admin.login)

module.exports = router;
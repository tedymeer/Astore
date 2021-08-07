const express = require('express');
const router = express.Router();
const auth = require('../helpers/auth');
const admin = require('../controllers/admin.controller');

// admin routes
router.post('/login',admin.login);

router.delete('/:id',admin.delete);

router.get('/',admin.list);

router.put('/',admin.update);
module.exports = router;
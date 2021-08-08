const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../controllers/admin.controller');

// admin routes
router.post('/login',admin.login);

router.delete('/:id',auth.authenticate,admin.delete);

router.get('/',auth.authenticate,admin.list);

router.put('/',auth.authenticate,admin.update);
module.exports = router;
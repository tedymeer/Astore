const express = require('express');
const router = express.Router();

router.use('/admins', require('./admins.route'));

module.exports = router;
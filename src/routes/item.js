const express = require('express');
const item = require('../controllers/item');

const router = express.Router();

router.get('/', item.findAll());

module.exports = router;

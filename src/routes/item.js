const express = require('express');
const item = require('../controllers/item');

const router = express.Router();

router.get('/', item.findAll()).get('/save', item.saveForm());

module.exports = router;

const express = require('express');
const { findAll, save } = require('../controllers/customer');

const router = express.Router();

router.get('/', findAll()).get('/save', save());

module.exports = router;

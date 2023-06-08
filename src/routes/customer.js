const express = require('express');
const { findAll } = require('../controllers/customer');

const router = express.Router();

router.get('/', findAll());

module.exports = router;

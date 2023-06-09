const express = require('express');
const { saveForm } = require('../controllers/sales');

const router = express.Router();

router.get('/save', saveForm());

module.exports = router;

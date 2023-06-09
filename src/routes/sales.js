const express = require('express');
const { saveForm, save } = require('../controllers/sales');

const router = express.Router();

router.get('/save', saveForm()).post('/save', save());

module.exports = router;

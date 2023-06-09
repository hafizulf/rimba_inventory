const express = require('express');
const { saveForm, save, findAll } = require('../controllers/sales');

const router = express.Router();

router.get('/save', saveForm()).post('/save', save()).get('/', findAll());

module.exports = router;

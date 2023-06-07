const express = require('express');
const fileUpload = require('../middleware/fileUpload');
const { itemCheck } = require('../middleware/item.validator');
const { findAll, saveForm, save } = require('../controllers/item');

const router = express.Router();

router
  .get('/', findAll())
  .get('/save', saveForm())
  .post('/save', fileUpload.single('barang'), itemCheck, save());

module.exports = router;

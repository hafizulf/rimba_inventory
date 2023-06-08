const express = require('express');
const fileUpload = require('../middleware/fileUpload');
const customerCheck = require('../middleware/customer.validator');
const { findAll, saveForm, save } = require('../controllers/customer');

const router = express.Router();

router
  .get('/', findAll())
  .get('/save', saveForm())
  .post('/save', fileUpload.single('ktp'), customerCheck, save());

module.exports = router;

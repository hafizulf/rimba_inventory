const { body, validationResult } = require('express-validator');

module.exports.itemCheck = [
  body('nama_item').notEmpty().withMessage('Nama item is required'),
  body('unit').notEmpty().withMessage('Unit is required'),
  body('stok').notEmpty().withMessage('Stok is required'),
  body('harga_satuan').notEmpty().withMessage('Harga satuan is required'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('item/save', {
        title: 'Save Item',
        layout: 'layouts/main',
        errors: errors.array(),
      });
    } else {
      next();
    }
  },
];

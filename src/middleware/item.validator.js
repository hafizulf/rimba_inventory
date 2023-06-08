const { body, validationResult } = require('express-validator');

const itemCheck = [
  body('nama_item').notEmpty().withMessage('Nama item is required'),
  body('unit').notEmpty().withMessage('Unit is required'),
  body('stok').notEmpty().withMessage('Stok is required'),
  body('harga_satuan').notEmpty().withMessage('Harga satuan is required'),
  body('barang').custom((value, { req }) => {
    if (!req.file) {
      throw new Error('Barang is required');
    } else {
      const ext = ['.jpg', '.jpeg', '.png'];
      const fileExt = req.file.originalname
        .substring(req.file.originalname.lastIndexOf('.'))
        .toLowerCase();
      const validExt = ext.includes(fileExt);
      if (!validExt) {
        throw new Error('Barang must be an image');
      }
    }
    return true;
  }),

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

module.exports = itemCheck;

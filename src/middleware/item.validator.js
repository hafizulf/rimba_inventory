const { body } = require('express-validator');

module.exports.itemCheck = () => {
  return [
    body('nama_item').notEmpty().withMessage('Nama item is required'),
    body('unit').notEmpty().withMessage('Unit is required'),
    body('stok').notEmpty().withMessage('Stok is required'),
    body('harga_satuan').notEmpty().withMessage('Harga satuan is required'),
    // body('barang').notEmpty().withMessage('Barang is required'),
  ];
};

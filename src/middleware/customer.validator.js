const { body, validationResult } = require('express-validator');

const customerCheck = [
  body('nama').notEmpty().withMessage('Nama is required'),
  body('contact')
    .notEmpty()
    .withMessage('Contact is required')
    .isMobilePhone('id-ID')
    .withMessage('Contact must be a valid Indonesian phone number'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('alamat').notEmpty().withMessage('Alamat is required'),
  body('tipe_diskon').notEmpty().withMessage('Tipe Diskon is required'),
  body('diskon').notEmpty().withMessage('Diskon is required'),
  body('ktp').custom((value, { req }) => {
    if (!req.file) {
      throw new Error('Ktp is required');
    } else {
      const ext = ['.jpg', '.jpeg', '.png'];
      const fileExt = req.file.originalname
        .substring(req.file.originalname.lastIndexOf('.'))
        .toLowerCase();
      const validExt = ext.includes(fileExt);
      if (!validExt) {
        throw new Error('Ktp must be an image');
      }
    }
    return true;
  }),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('customer/save', {
        title: 'Save customer',
        layout: 'layouts/main',
        errors: errors.array(),
      });
    } else {
      next();
    }
  },
];

module.exports = customerCheck;

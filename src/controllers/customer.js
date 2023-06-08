const model = require('../models/customer');

module.exports.findAll = () => {
  return async (req, res) => {
    const customers = await model.findAll();

    res.render('customer/list', {
      customers,
      title: 'List Customers',
      layout: 'layouts/main',
      msg: req.flash('msg'),
    });
  };
};

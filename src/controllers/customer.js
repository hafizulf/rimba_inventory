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

module.exports.saveForm = () => {
  return (req, res) => {
    res.render('customer/save', {
      title: 'Save Customer',
      layout: 'layouts/main',
    });
  };
};

module.exports.save = () => {
  return async (req, res) => {
    const data = req.body;
    if (req.file) data.ktp = req.file.filename;

    await model.save(data);

    req.flash('msg', 'Customer has been created');
    res.redirect('/customers');
  };
};

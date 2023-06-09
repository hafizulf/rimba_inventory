const customerModel = require('../models/customer');
const itemModel = require('../models/item');

module.exports.saveForm = () => {
  return async (req, res) => {
    const customers = await customerModel.findCustomers();
    const items = await itemModel.findItems();

    res.render('sales/save', {
      customers,
      items,
      title: 'Save Sales',
      layout: 'layouts/main',
      msg: req.flash('msg'),
    });
  };
};

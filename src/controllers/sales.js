const customerModel = require('../models/customer');
const itemModel = require('../models/item');
const model = require('../models/sales');
const db = require('../db/knex');

module.exports.saveForm = () => {
  return async (req, res) => {
    const customers = await customerModel.findCustomers();
    const items = await itemModel.findItems();

    res.render('sales/save', {
      customers,
      items,
      title: 'Save Sales',
      layout: 'layouts/main',
    });
  };
};

module.exports.save = () => {
  return (req, res) => {
    db.transaction(async (trx) => {
      await model.save(req.body).transacting(trx);
      await itemModel
        .deleteStok(req.body.item_id, parseInt(req.body.qty))
        .transacting(trx);
    })
      .then(() => {
        req.flash('msg', 'Sales record has been created');
        res.redirect('/sales');
      })
      .catch((err) => {
        res.redirect('/sales/save');
      });
  };
};

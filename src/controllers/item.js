const model = require('../models/item');

const findAll = () => {
  return async (req, res) => {
    const items = await model.findAll();

    res.render('item/list', {
      items,
      title: 'List Items',
      layout: 'layouts/main',
      msg: req.flash('msg'),
    });
  };
};

const saveForm = () => {
  return (req, res) => {
    res.render('item/save', {
      title: 'Save Item',
      layout: 'layouts/main',
    });
  };
};

const save = () => {
  return async (req, res) => {
    const data = req.body;
    if (req.file) data.barang = req.file.filename;

    await model.save(data);

    req.flash('msg', 'Item has been created');
    res.redirect('/items');
  };
};

module.exports = {
  findAll,
  saveForm,
  save,
};

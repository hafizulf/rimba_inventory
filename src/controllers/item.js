const db = require('../db/knex');
const table = 'items';

const findAll = () => {
  return async (req, res) => {
    const items = await db.select().table(table);

    res.render('item/list', {
      items,
      title: 'List Items',
      layout: 'layouts/main',
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

module.exports = {
  findAll,
  saveForm,
};

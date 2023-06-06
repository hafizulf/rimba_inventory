const db = require('../db/knex');
const table = 'items';

const findAll = () => {
  return async (req, res) => {
    try {
      const items = await db.select().table(table);

      res.render('item/list', {
        items,
        title: 'List Items',
        layout: 'layouts/main',
      });
    } catch (error) {
      res.send('<h1>Internal Server Error</h1>');
    }
  };
};

module.exports = {
  findAll,
};

const db = require('../db/knex');
const table = 'sales';

module.exports.save = (sales) => {
  return db.insert(sales).table(table);
};

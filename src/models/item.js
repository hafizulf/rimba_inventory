const db = require('../db/knex');
const table = 'items';

module.exports.findAll = () => {
  return db.select().table(table);
};

module.exports.save = (item) => {
  return db.insert(item).table(table);
};

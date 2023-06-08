const db = require('../db/knex');
const table = 'customers';

module.exports.findAll = () => {
  return db.select().table(table);
};

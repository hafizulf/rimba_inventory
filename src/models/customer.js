const db = require('../db/knex');
const table = 'customers';

module.exports.findAll = () => {
  return db.select().table(table);
};

module.exports.save = (customer) => {
  return db.insert(customer).table(table);
};

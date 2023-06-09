const db = require('../db/knex');
const table = 'customers';

module.exports.findAll = () => {
  return db.select().table(table);
};

module.exports.save = (customer) => {
  return db.insert(customer).table(table);
};

module.exports.findCustomers = () => {
  return db.select('customer_id', 'nama', 'diskon', 'tipe_diskon').table(table);
};

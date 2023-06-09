const db = require('../db/knex');
const table = 'sales';

module.exports.save = (sales) => {
  return db.insert(sales).table(table);
};

module.exports.findAll = () => {
  return db(table)
    .select(
      'sales.*',
      'customers.nama as nama_customer',
      'items.nama_item as nama_item'
    )
    .join('customers', 'customers.customer_id', '=', 'sales.customer_id')
    .join('items', 'items.item_id', '=', 'sales.item_id');
};

const db = require('../db/knex');
const table = 'items';

module.exports.findAll = () => {
  return db.select().table(table);
};

module.exports.save = (item) => {
  return db.insert(item).table(table);
};

module.exports.findItems = () => {
  return db.select('item_id', 'nama_item', 'stok', 'harga_satuan').table(table);
};

module.exports.deleteStok = (item_id, qty) => {
  return db(table).where({ item_id }).decrement('stok', qty);
};

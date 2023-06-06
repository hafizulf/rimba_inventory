module.exports.up = (knex) => {
  return knex.schema.createTable('items', (table) => {
    table.increments('item_id').unsigned();
    table.string('nama', 128).notNullable();
    table.enu('unit', ['kg', 'pcs']);
    table.integer('stok', 9);
    table.integer('harga_satuan', 11);
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTable('items');
};

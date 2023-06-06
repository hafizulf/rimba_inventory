module.exports.up = (knex) => {
  return knex.schema.createTable('sales', (table) => {
    table.increments('sales_id').unsigned();
    table.integer('customer_id').unsigned().references('customers.customer_id');
    table.integer('item_id').unsigned().references('items.item_id');
    table.string('code_transaksi', 128).notNullable();
    table.timestamp('tanggal_transaksi').defaultTo(knex.fn.now());
    table.integer('qty', 11);
    table.integer('total_diskon', 11);
    table.integer('total_harga', 11);
    table.integer('total_bayar', 11);
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTable('sales');
};

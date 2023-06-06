module.exports.up = (knex) => {
  return knex.schema.createTable('customers', (table) => {
    table.increments('customer_id').unsigned();
    table.string('nama', 128).notNullable();
    table.string('contact', 32).notNullable();
    table.string('email', 64).notNullable();
    table.string('alamat', 255).notNullable();
    table.integer('diskon', 11).notNullable();
    table.enu('tipe_diskon', ['persentase', 'fix diskon']).notNullable();
    table.string('ktp', 255).notNullable();
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTable('customers');
};

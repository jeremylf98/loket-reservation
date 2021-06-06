
exports.up = function(knex) {
    return knex.schema.createTable('transactions', table => {
        table.uuid('id').primary();
        table.uuid('ticket_id');
        table.timestamps(true, true);
        table.foreign('ticket_id').references('tickets.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('transactions');
  
};


exports.up = function(knex) {
    return knex.schema.createTable('ticket_types', table => {
        table.uuid('id').primary();
        table.string('name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ticket_types');
  
};


exports.up = function(knex) {
    return knex.schema.createTable('ticket_types', table => {
        table.uuid('ticket_id');
        table.string('types').notNullable();
        table.foreign('ticket_id').references('tickets.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ticket_types');
  
};

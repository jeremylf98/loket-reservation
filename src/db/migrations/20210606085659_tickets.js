
exports.up = function(knex) {
    return knex.schema.createTable('tickets', table => {
        table.uuid('id').primary();
        table.uuid('event_id');
        table.string('type').notNullable();
        table.integer('price').notNullable();
        table.integer('quantity').notNullable();
        table.timestamps(true,true);
        table.foreign('event_id').references('events.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tickets');
};

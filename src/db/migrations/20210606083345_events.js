
exports.up = function(knex) {
    return knex.schema.createTable('events', table => {
        table.uuid('id').primary();
        table.uuid('location_id');
        table.string('name').notNullable().unique();
        table.datetime('start_time', { precision: 6 });
        table.datetime('end_time', { precision: 6 });
        table.timestamps(true,true);
        table.foreign('location_id').references('locations.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};

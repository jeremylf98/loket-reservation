
exports.up = function(knex) {
    return knex.schema.createTable('events', table => {
        table.uuid('id').primary();
        table.uuid('location_id');
        table.string('name').notNullable().unique();
        table.timestamp('start_time', {useTz: true});
        table.timestamp('end_time', {useTz: true});
        table.timestamps(true,true);
        table.foreign('location_id').references('locations.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};

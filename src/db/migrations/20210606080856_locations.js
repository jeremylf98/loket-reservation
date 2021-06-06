
exports.up = function(knex) {
    return knex.schema.createTable('locations', table => {
        table.uuid('id').primary();
        table.string('name').notNullable().unique();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations');
};

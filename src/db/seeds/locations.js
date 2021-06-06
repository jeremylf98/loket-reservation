const { v4: uuidv4 } = require('uuid');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then( () => {

      const seeds = [
        // data 1
        {
          id: uuidv4(), // generate uuidv4
          name: 'Central Park',
        },
        // data 2
        {
          id: uuidv4(), // generate uuidv4
          name: 'Plaza Indonesia',
        },
        // data 3
        {
          id: uuidv4(), // generate uuidv4
          name: 'Mall Kelapa Gading',
        },
      ];

      return knex('locations').insert(seeds);

    });
};

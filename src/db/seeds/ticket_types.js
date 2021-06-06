const {v4: uuidv4 } = require('uuid');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ticket_types').del()
    .then( () => {
      const seeds = [
        // data 1
        {
          id: uuidv4(), // generate uuidv4
          name: 'Economy',
        },
        // data 2
        {
          id: uuidv4(), // generate uuidv4
          name: 'VIP',
        },
        // data 3
        {
          id: uuidv4(), // generate uuidv4
          name: 'VIP Plus',
        },
        // data 4
        {
          id: uuidv4(), // generate uuidv4
          name: 'VVIP',
        },
      ];

      return knex('ticket_types').insert(seeds);

    });
};

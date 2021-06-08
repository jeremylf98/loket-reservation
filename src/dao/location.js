const db = require('../db/db');
const {v4: uuidv4} = require('uuid');

class LocationDAO {

    async createLocation(name) {
        
        const location = db('locations').insert({
            id: uuidv4(),
            name,
        }).returning('*');

        return Promise.all([location])
        .then(location => location[0][0]);
    }

}

module.exports = new LocationDAO();
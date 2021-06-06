const db = require('../db/db');
const {v4: uuidv4} = require('uuid');

class LocationDAO {

    async createLocation(name) {
        
        const location = db('locations').insert({
            id: uuidv4(),
            name,
        });

        return Promise.all([location])
        .then(location => location[0].rowCount === 1);
    }

}

module.exports = new LocationDAO();
const db = require('../db/db');
const {v4: uuidv4} = require('uuid');

class EventDAO {
    async createEvent(locationId, name, startTime, endTime) {
        const event = db('events').insert({
            id: uuidv4(),
            location_id: locationId,
            name,
            start_time: startTime,
            end_time: endTime,
        });

        return Promise.all([event])
        .then(event => event[0].rowCount === 1);
    }

    async createEventTicket(eventId, type, price, quantity) {
        const ticket = await db('tickets').insert({
            id: uuidv4(),
            event_id: eventId,
            type,
            price,
            quantity,
        });

        return Promise.all([ticket])
        .then(ticket => ticket[0].rowCount === 1);
    }

    async getAllEventInfo() {
        return db('events').select();
    }

}

module.exports = new EventDAO();
const db = require('../db/db');
const {v4: uuidv4} = require('uuid');

class EventDAO {
    async createEvent(locationId, name, startTime, endTime) {
        const [id] = await db('events').insert({
            id: uuidv4(),
            location_id: locationId,
            name,
            start_time: startTime,
            end_time: endTime,
        }).returning('id');

        return id;
    }

    async createEventTicket(eventId, type, price, quantity) {
        const [id] = await db('tickets').insert({
            id: uuidv4(),
            event_id: eventId,
            type,
            price,
            quantity,
        }).returning('id');

        return id;
    }

    async getAllEventInfo() {
        return db('events').select();
    }

}

module.exports = new EventDAO();
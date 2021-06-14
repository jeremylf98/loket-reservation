const db = require('../db/db');
const {v4: uuidv4} = require('uuid');

class EventDAO {
    async createEvent(locationId, name, startTime, endTime) {

        const location = await db('locations')
        .where('id', locationId)
        .first();

        if(!location)
            return;

        const event = db('events').insert({
            id: uuidv4(),
            location_id: locationId,
            name,
            start_time: startTime,
            end_time: endTime,
        }).returning('*');

        return Promise.all([event])
        .then(event => event[0][0]);
    }

    async createEventTicket(eventId, type, price, quantity) {

        const event = await db('events')
        .where('id', eventId)
        .first();

        if(!event)
            return;

        const ticket = db('tickets').insert({
            id: uuidv4(),
            event_id: eventId,
            type,
            price,
            quantity,
        }).returning('*');

        return Promise.all([ticket])
        .then(ticket => ticket[0][0]);
    }

    async getEventInfo(eventId) {
        return db('events')
        .where('id', eventId)
        .first();
    }

    async getAllEventInfo() {
        return db('events')
        .select();
    }

    async getAllEventTicketInfo() {
        return db('tickets')
        .select();
    }

}

module.exports = new EventDAO();
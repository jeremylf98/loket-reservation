const eventDAO = require('../dao/event');

class EventService {
    createEvent(eventDTO) {
        const { locationId, name, startTime, endTime } = eventDTO;
        return eventDAO.createEvent(locationId, name, startTime, endTime);
    }

    createEventTicket(eventTicketDTO) {
        const { eventId, type, price, quantity } = eventTicketDTO;

        // Add logic to filter if type is in the type list

        return eventDAO.createEventTicket(eventId, type, price, quantity);
    }

    getAllEventInfo() {
        return eventDAO.getAllEventInfo();
    }

}

module.exports = new EventService();
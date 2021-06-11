const eventDAO = require('../dao/event');

class EventService {
    createEvent(eventDTO) {
        const { locationId, name, startTime, endTime } = eventDTO;
        return eventDAO.createEvent(locationId, name, startTime, endTime);
    }

    createEventTicket(eventTicketDTO) {
        const { eventId, type, price, quantity } = eventTicketDTO;
        return eventDAO.createEventTicket(eventId, type, price, quantity);
    }

    getEventInfo(eventId) {
        return eventDAO.getEventInfo(eventId);
    }

    getAllEventInfo() {
        return eventDAO.getAllEventInfo();
    }

}

module.exports = new EventService();
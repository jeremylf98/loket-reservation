const eventService = require('../services/event');
const responseHelper = require('../helper/response.helper');
const eventSchemas = require('./Schema/event.schema');

class EventController {
    async createEvent(req, res, next) {
        try{
            // validate the body
            await eventSchemas.createEventSchema(req.body);

            const data = await eventService.createEvent(req.body);

            if(!data)
                return res.status(400).send('Bad Request');

            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
            res.json(responseHelper.errorResponse(e.message));
        }
    }

    async createEventTicket(req, res) {
        try{

            // validate the body
            await eventSchemas.createEventTicketSchema(req.body);

            const data = await eventService.createEventTicket(req.body);
            if(!data)
                return res.status(400).send('Bad Request');
                
            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
            res.json(responseHelper.errorResponse(e.message));
        }
    }

    async getEventInfo(req, res) {
        try{
            const { eventId } = req.params;
            const data = await eventService.getEventInfo(eventId);
            if(!data)
                return res.status(404).send('Event Not Found');
            return res.status(200).json(responseHelper.baseResponse(data)); // return data with a template

        } catch (e) {
            console.log(e);
            res.json(responseHelper.errorResponse(e.message));
        }
    }

}

module.exports = new EventController();
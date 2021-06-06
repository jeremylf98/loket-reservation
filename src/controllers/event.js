const eventService = require('../services/event');
const responseHelper = require('../helper/response.helper');

class EventController {
    async createEvent(req, res) {
        try{

            const id = await eventService.createEvent(req.body);
            return res.status(200).json(responseHelper.baseResponse(id));

        } catch (e) {
            console.log(e);
        }
    }

    async createEventTicket(req, res) {
        try{

            const id = await eventService.createEventTicket(req.body);
            return res.status(200).json(responseHelper.baseResponse(id));

        } catch (e) {
            console.log(e);
        }
    }

    async getAllEventInfo(req, res) {
        try{

            const eventInfo = await eventService.getAllEventInfo();
            return res.status(200).json(responseHelper.baseResponse(eventInfo)); // return data with a template

        } catch (e) {
            console.log(e);
            res.status(404).send('Not Found');
        }
    }

}

module.exports = new EventController();
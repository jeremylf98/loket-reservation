const Joi = require("joi").extend(require('@joi/date'));
// const schema = Joi.date().format('YYYY-MM-DD').utc();

class EventSchema {
    async createEventSchema(eventDTO) {

        return Joi.object({
            locationId: Joi.string().required(),
            name: Joi.string().required(),
            startTime: Joi.date().greater('now').format('YYYY-MM-DD').utc().required(),
            endTime: Joi.date().greater(Joi.ref('startTime')).format('YYYY-MM-DD').utc().required()
        }).validateAsync(eventDTO);

    }

    async createEventTicketSchema(eventTicketDTO) {
        return Joi.object({
            eventId: Joi.string().required(),
            type: Joi.string().required(),
            price: Joi.number().required(),
            quantity: Joi.number().min(1).required(),
        }).validateAsync(eventTicketDTO);
    }
}

module.exports = new EventSchema();
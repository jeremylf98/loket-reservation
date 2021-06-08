const Joi = require("joi");

class LocationSchema {
    async createEventSchema(locationDTO) {

        return Joi.object({
            name: Joi.string().required(),
        }).validateAsync(locationDTO);

    }

}

module.exports = new LocationSchema();
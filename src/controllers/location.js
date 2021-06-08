const locationService = require('../services/location');
const responseHelper = require('../helper/response.helper');
const locationSchema = require('./Schema/location.schema');

class LocationController{
    async createLocation(req, res) {
        try {

            // validate the body
            await locationSchema.createEventSchema(req.body);

            const data = await locationService.createLocation(req.body);
            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
            res.json(responseHelper.errorResponse(e.message));
        }
    }
}

module.exports = new LocationController();
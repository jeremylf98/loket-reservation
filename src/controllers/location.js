const locationService = require('../services/location');
const responseHelper = require('../helper/response.helper');

class LocationController{
    async createLocation(req, res) {
        try {
            const data = await locationService.createLocation(req.body);
            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new LocationController();
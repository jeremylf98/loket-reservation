const locationDAO = require('../dao/location');

class LocationService {
    createLocation(locationDTO) {
        const { name } = locationDTO;
        return locationDAO.createLocation(name);
    }
}

module.exports = new LocationService();
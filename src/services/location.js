const locationDAO = require('../dao/location');

class LocationService {
    createLocation(locationDTO) {
        const { name } = locationDTO;
        return locationDAO.createLocation(name);
    }

    getAllLocation() {
        return locationDAO.getAllLocation();
    }
}

module.exports = new LocationService();
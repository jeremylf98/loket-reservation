const express = require('express');
const router = express.Router();

const event = require('../controllers/event');
const location = require('../controllers/location');

// event routes
router.post('/event/create', event.createEvent);
router.post('/event/ticket/create', event.createEventTicket);
router.get('/event/get_info', event.getAllEventInfo);

// location routes
router.post('/location/create', location.createLocation);

// transaction routes
router.post('/transaction/purchase', (req, res) => {

    const { time, name, price } = req.body;

    if(!name) {
        res.status(400).send('name is empty');
        return;
    }

    res.status(200).send({time, name, price});
});

router.get('/transaction/get_info', (req, res) => {

    res.status(200).send('Success sending request');
    
});

module.exports = router;
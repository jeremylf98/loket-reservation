const express = require('express');
const router = express.Router();

const event = require('../controllers/event');

// event routes
router.post('/event/create', event.createEvent);
router.post('/event/ticket/create', event.createEventTicket);
router.get('/event/get_info', event.getAllEventInfo);

// location routes
router.post('/location/create', (req, res) => {

    const { name } = req.body;

    if(!name) {
        res.status(400).send('name is empty');
        return;
    }

    res.status(200).send({name});
});

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
const express = require('express');
const router = express.Router();

const event = require('../../controllers/event');

router.route('/create')
    .post(event.createEvent);

router.route('/ticket/create')
    .post(event.createEventTicket);

router.route('/get_info')
    .get(event.getEventInfo);

module.exports = router;
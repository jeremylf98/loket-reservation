const express = require('express');
const router = express.Router();

const event = require('../controllers/event');
const location = require('../controllers/location');
const transaction = require('../controllers/transaction');

// event routes
router.post('/event/create', event.createEvent);
router.post('/event/ticket/create', event.createEventTicket);
router.get('/event/get_info/:eventId', event.getEventInfo);
router.get('/event/get_info', event.getAllEventInfo);

// location routes
router.post('/location/create', location.createLocation);

// transaction routes
router.post('/transaction/purchase', transaction.createTransaction);
router.get('/transaction/get_info/:transactionId', transaction.getTransactionInfo);

module.exports = router;
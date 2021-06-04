const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// List of routers

const event = require('./src/routes/v1/event');
const transaction = require('./src/routes/v1/transaction')
const location = require('./src/routes/v1/location')

app.use('/v1/event', event);
app.use('/v1/transaction', transaction);
app.use('/v1/location', location);

// Running localhost 

app.listen(
    port,
    () => console.log(`it's alive on https://localhost:${port}`)
)
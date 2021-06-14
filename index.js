require('dotenv').config(); // Required to use .env file
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes');

app.use(express.json());
app.use(cors());
app.use(router);

// Running localhost 

const port = process.env.PORT || 5000;

app.listen(
    port,
    () => console.log(`it's alive on https://localhost:${port}`)
)
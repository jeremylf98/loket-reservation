const express = require('express');
let router = express.Router();

router.route('/create')
    .post((req, res) => {

        const { time, name } = req.body;

        if(!name) {
            res.status(400).send('name is empty');
            return;
        }

        res.status(200).send({time, name});
    });

router.route('/ticket/create')
    .post((req, res) => {

        const { name, price } = req.body;

        if(!price) {
            res.status(400).send('price is not defined');
            return;
        }

        res.status(200).send({name, price});

    });

router.route('/get_info')
    .get((req, res) => {

        res.status(200).send('Success sending request');
    });

module.exports = router;
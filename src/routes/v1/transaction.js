const express = require('express');
const router = express.Router();

router.route('/purchase')
    .post((req, res) => {

        const { time, name, price } = req.body;

        if(!name) {
            res.status(400).send('name is empty');
            return;
        }

        res.status(200).send({time, name, price});
    });

router.route('/get_info')
    .get((req, res) => {

        res.status(200).send('Success sending request');
        
    });

module.exports = router;
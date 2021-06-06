const express = require('express');
const router = express.Router();

router.route('/create')
    .post((req, res) => {

        const { name } = req.body;

        if(!name) {
            res.status(400).send('name is empty');
            return;
        }

        res.status(200).send({name});
    });

module.exports = router;
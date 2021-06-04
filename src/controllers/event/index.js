let eventController = {};

eventController.createEvent = (req, res) => {
        const { name, price } = req.body;

        if(!price) {
            res.status(400).send('price is not defined');
            return;
        }

        res.status(200).send({name, price});

}

module.exports = eventController;
const Joi = require("joi");

class TransactionSchema {
    async createTransactionSchema(transactionDTO) {

        return Joi.array().items(
            Joi.object({
                ticketId: Joi.string().required(),
                quantity: Joi.number().min(1).required()
            })
        ).validateAsync(transactionDTO);

    }
}

module.exports = new TransactionSchema();
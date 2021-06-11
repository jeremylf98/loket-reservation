const transactionService = require('../services/transaction');
const responseHelper = require('../helper/response.helper');
const transactionSchema = require('./Schema/transaction.schema');

class TransactionController{
    async createTransaction(req, res) {
        try {

            await transactionSchema.createTransactionSchema(req.body);

            const data = await transactionService.createTransaction(req.body);
            if(!data) 
                return res.status(400).send('Bad Request');
            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
            res.json(responseHelper.errorResponse(e.message));
        }
    }

    async getTransactionInfo(req, res) {
        try {
            const { transactionId } = req.params;
            const data = await transactionService.getTransactionInfo(transactionId);

            if(!data) 
                return res.status(404).send('Transaction Not Found!');

            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
            res.json(responseHelper.errorResponse(e.message));
        }
    }

    async getAllTransaction(req, res) {
        try{
            const data = await transactionService.getAllTransaction();
            return res.status(200).json(responseHelper.baseResponse(data)); // return data with a template

        } catch (e) {
            console.log(e);
            res.json(responseHelper.errorResponse(e.message));
        }
    }
}

module.exports = new TransactionController();
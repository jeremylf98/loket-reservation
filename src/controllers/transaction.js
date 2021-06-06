const transactionService = require('../services/transaction');
const responseHelper = require('../helper/response.helper');

class TransactionController{
    async createTransaction(req, res) {
        try {
            const data = await transactionService.createTransaction(req.body);
            if(!data) 
                return res.status(400).send('Bad Request');
            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
        }
    }

    async getTransactionInfo(req, res) {
        try {
            const { transactionId } = req.params;
            const data = await transactionService.getTransactionInfo(transactionId);

            if(!data) 
                return res.status(404).send('Transaction not found!');

            return res.status(200).json(responseHelper.baseResponse(data));

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new TransactionController();
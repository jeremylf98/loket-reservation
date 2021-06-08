const transactionDAO = require('../dao/transaction');

class TransactionService {
    createTransaction(transactionDTOs) {
        return transactionDAO.createTransaction(transactionDTOs);
    }

    getTransactionInfo(transactionId) {
        return transactionDAO.getTransactionInfo(transactionId);
    }
}

module.exports = new TransactionService();
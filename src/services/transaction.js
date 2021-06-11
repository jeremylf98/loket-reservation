const transactionDAO = require('../dao/transaction');

class TransactionService {
    createTransaction(transactionDTOs) {
        return transactionDAO.createTransaction(transactionDTOs);
    }

    getTransactionInfo(transactionId) {
        return transactionDAO.getTransactionInfo(transactionId);
    }

    getAllTransaction() {
        return transactionDAO.getAllTransaction();
    }
    
}

module.exports = new TransactionService();
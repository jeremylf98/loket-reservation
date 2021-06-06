const transactionDAO = require('../dao/transaction');

class TransactionService {
    createTransaction(transactionDTO) {
        const { ticketId, quantity } = transactionDTO;
        return transactionDAO.createTransaction(ticketId, quantity);
    }

    getTransactionInfo(transactionId) {
        return transactionDAO.getTransactionInfo(transactionId);
    }
}

module.exports = new TransactionService();
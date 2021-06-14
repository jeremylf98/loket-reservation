const db = require('../db/db');
const {v4: uuidv4} = require('uuid');

class TransactionDAO {

    async createTransaction(transactionDTOs) {

        const promises = [];

        for(let i = 0; i < transactionDTOs.length; i++) {

            const ticket = await db('tickets')
            .where('id', transactionDTOs[i].ticketId)
            .first();
    
            if(!ticket || (ticket.quantity - transactionDTOs[i].quantity) < 0) 
                return;

            const transaction = db('transactions').insert({
                id: uuidv4(),
                ticket_id: transactionDTOs[i].ticketId
            }).returning('*');

            const updateTicket = db('tickets')
            .where('id', transactionDTOs[i].ticketId)
            .update({
                quantity: ticket.quantity - transactionDTOs[i].quantity,
                updated_at: new Date(),
            });

            promises.push(transaction);
            promises.push(updateTicket);
    
        }

        return Promise.all(promises)
        .then( (promise) => {
            const result = [];
            for(let i = 0; i < promise.length; i+=2) {
                result.push(promise[i][0]);
            }
            return result;
        });

    }

    async getTransactionInfo(transactionId) {
        const transaction = await db('transactions')
        .where('id', transactionId)
        .first();

        return transaction;

    }
    
    async getAllTransaction() {
        return db('transactions')
        .select();
    }

}

module.exports = new TransactionDAO();
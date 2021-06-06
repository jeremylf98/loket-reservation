const db = require('../db/db');
const {v4: uuidv4} = require('uuid');

class TransactionDAO {

    async createTransaction(ticketId, quantity) {

        if(quantity === 0) return;

        const ticket = await db('tickets')
        .where('id', ticketId)
        .first();

        if(!ticket || (ticket.quantity - quantity) < 0) 
            return;

        const transaction = db('transactions').insert({
            id: uuidv4(),
            ticket_id: ticketId
        });

        const updateTicket = db('tickets')
        .where('id', ticketId)
        .update({
            quantity: ticket.quantity - quantity
        })

        return Promise.all([transaction, updateTicket])
        .then(transaction => transaction[0].rowCount === 1);

    }

    async getTransactionInfo(transactionId) {
        const transaction = await db('transactions')
        .where('id', transactionId)
        .first();

        return transaction;

    }

}

module.exports = new TransactionDAO();
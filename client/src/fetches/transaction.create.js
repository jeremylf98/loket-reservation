import React, { useState } from 'react';
import axios from 'axios';

function TransactionCreate() {
    const [inputFields, setInputFields] = useState([
        { ticketId: '', quantity: ''},
    ])

    const changeHandler = (index, event) => {
        // console.log(index, event.target.name);
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const submitHandler = async (e) => {
        // e.preventDefault();
        await axios.post('http://localhost:8000/transaction/purchase', inputFields)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleAddField = () => {
        setInputFields([...inputFields, {ticketId: '', quantity: ''}])
    }

    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    return (
        <div className="TransactionCreate">
            <h1>Create New Transaction (Buy Ticket)</h1>
            <form onSubmit={submitHandler}>
                {
                    inputFields.map((inputField, index) => (
                        <div key={index}>
                        <br/>
                            TicketId:  
                            <input 
                            type="text"
                            name="ticketId"
                            value={inputField.ticketId}
                            onChange={event => changeHandler(index, event)}
                            />
                            <br />Quantity:  
                            <input 
                            type="text"
                            name="quantity"
                            value={inputField.quantity}
                            onChange={event => changeHandler(index, event)}
                            />
                        </div>
                    ))
                }
                <button type="submit" onClick={submitHandler}>Buy</button>
                <button type="button" onClick={handleRemoveField}>-</button>
                <button type="button" onClick={handleAddField}>+</button>
            </form>
        </div>
    );
}

export default TransactionCreate;
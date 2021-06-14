import React, {Component} from 'react';
import axios from 'axios';

class EventTicketCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventId: '',
            type: '',
            price: '',
            quantity: '',
        };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
        // e.preventDefault();
        // console.log(this.state);
        await axios.post('http://localhost:8000/event/ticket/create', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

        
    }

    render() {

        const {eventId, type, price, quantity} = this.state;
            
        return (
            <div>
                <h1>Insert Event Ticket Data</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        EventId: 
                        <input 
                        type="text"
                        name="eventId"
                        value={eventId}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        Type: 
                        <input 
                        type="text"
                        name="type"
                        value={type}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        Price: 
                        <input 
                        type="text"
                        name="price"
                        value={price}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        Quantity: 
                        <input 
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Insert</button>
                </form>
                <br></br><br></br>
            </div>
        )
    }

}

export default EventTicketCreate;

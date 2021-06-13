import React, {Component} from 'react';

class EventTicketGetInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            datas: null
        };
    }

    async componentDidMount () {
        const result = await this.getData();
        this.setState({datas: result.data, loading: false});
    }

    async getData() {
        const url = 'http://localhost:8000/event/ticket/get_info';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }

    render() {

        if(this.state.loading)
         return <h1>loading...</h1>;

         if(!this.state.datas)
            return <div>No Event Ticket Data Fetched!</div>
            
        return (
            <div>
                <div>
                    <h1>ALL EVENT TICKET INFO DATA</h1>
                    {this.state.datas.map((data, index) => {
                        return (
                            <div key={ data.id }>
                                <h4> Event Ticket Data number {index + 1} </h4>
                                <div>Id: {data.id}</div>
                                <div>Event Id: {data.event_id}</div>
                                <div>Type: {data.type}</div>
                                <div>Price: {data.price}</div>
                                <div>Quantity: {data.quantity}</div>
                                <div>Created At: {data.created_at}</div>
                                <div>Updated At: {data.updated_at}</div>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default EventTicketGetInfo;

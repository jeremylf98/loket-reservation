import React, {Component} from 'react';

class EventGetInfo extends Component {

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
        const url = 'http://localhost:8000/event/get_info';
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
            return <div>No Event Data Fetched!</div>
            
        return (
            <div>
                <div>
                    <h1>ALL EVENT INFO DATA</h1>
                    {this.state.datas.map((data, index) => {
                        return (
                            <div key={ data.id }>
                                <h4> Event Data number {index + 1} </h4>
                                <div>Event Id: {data.id}</div>
                                <div>Location Id: {data.location_id}</div>
                                <div>Event Name: {data.name}</div>
                                <div>Event Start Time : {data.start_time}</div>
                                <div>Event End Time: {data.end_time}</div>
                                <div>Event Created At: {data.created_at}</div>
                                <div>Event Updated At: {data.updated_at}</div>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default EventGetInfo;

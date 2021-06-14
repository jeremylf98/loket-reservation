import React, {Component} from 'react';

class TransactionGetInfo extends Component {

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
        const url = 'http://localhost:8000/transaction/get_info';
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
            return <div>No Transaction Data Fetched!</div>
            
        return (
            <div>
                <div>
                    <h1>ALL TRANSACTION DATA</h1>
                    {this.state.datas.map((data, index) => {
                        return (
                            <div key={ data.id }>
                                <h4> Transaction Data number {index + 1} </h4>
                                <div>Transaction Id: {data.id}</div>
                                <div>Transaction Ticket Id: {data.ticket_id}</div>
                                <div>Transaction Created At: {data.created_at}</div>
                                <div>Transaction Updated At: {data.updated_at}</div>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default TransactionGetInfo;

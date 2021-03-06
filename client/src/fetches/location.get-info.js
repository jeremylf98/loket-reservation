import React, {Component} from 'react';

class LocationGetInfo extends Component {

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
        const url = 'http://localhost:8000/location';
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
            return <div>No Location Data Fetched!</div>
            
        return (
            <div>
                <div>
                    <h1>ALL LOCATION DATA</h1>
                    {this.state.datas.map((data, index) => {
                        return (
                            <div key={ data.id }>
                                <h4> Location Data number {index + 1} </h4>
                                <div> Location Id: {data.id} </div>
                                <div>Location Name: {data.name}</div>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default LocationGetInfo;

import React, {Component} from 'react';
import axios from 'axios';

class EventCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationId: '',
            name: '',
            startTime: '',
            endTime: '',
        };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
        // e.preventDefault();
        // console.log(this.state);
        await axios.post('http://localhost:8000/event/create', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

        
    }

    render() {

        const {locationId, name, startTime, endTime} = this.state;
            
        return (
            <div>
                <h1>Insert Event Data</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        LocationId:
                        <input 
                        type="text"
                        name="locationId"
                        value={locationId}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        Name: 
                        <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        startTime: 
                        <input 
                        type="text"
                        name="startTime"
                        value={startTime}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        endTime: 
                        <input 
                        type="text"
                        name="endTime"
                        value={endTime}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Insert</button>
                </form>
                <br></br><br></br>
            </div>
        )
    }

}

export default EventCreate;

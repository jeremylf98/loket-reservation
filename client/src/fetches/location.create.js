import React, {Component} from 'react';
import axios from 'axios';

class LocationCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
        // e.preventDefault();
        // console.log(this.state);
        await axios.post('http://localhost:8000/location/create', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

        
    }

    render() {

        const {name} = this.state;
            
        return (
            <div>
                <h1>Insert Location Data</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        Name: 
                        <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Insert</button>
                </form>
                <br></br><br></br>
            </div>
        )
    }

}

export default LocationCreate;

import React, {Component} from 'react';
import EventGetInfo from './fetches/event.get-info';
import EventCreate from './fetches/event.create';
import './App.css';

class App extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //     fetch("http://localhost:8000/event/get_info/d77e7f91-a252-4b7b-a683-1390e77ce040")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }
  
  render() {
    return <div className="App">
      <EventCreate />
      <EventGetInfo />
    </div>
  }

}

export default App;

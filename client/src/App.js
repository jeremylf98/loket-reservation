import React, {Component} from 'react';
import EventGetInfo from './fetches/event.get-info';
import EventCreate from './fetches/event.create';
import LocationGetInfo from './fetches/location.get-info';
import LocationCreate from './fetches/location.create';
import TransactionGetInfo from './fetches/transaction.get-info';
import EventTicketGetInfo from './fetches/event-ticket.get-info';
import EventTicketCreate from './fetches/event-ticket.create';

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
      <LocationCreate />
      <LocationGetInfo />
      <EventCreate />
      <EventGetInfo />
      <EventTicketCreate />
      <EventTicketGetInfo />
      <TransactionGetInfo />
    </div>
  }

}

export default App;

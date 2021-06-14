import React, {Component} from 'react';
import EventGetInfo from './fetches/event.get-info';
import EventCreate from './fetches/event.create';
import LocationGetInfo from './fetches/location.get-info';
import LocationCreate from './fetches/location.create';
import TransactionGetInfo from './fetches/transaction.get-info';
import TransactionCreate from './fetches/transaction.create';
import EventTicketGetInfo from './fetches/event-ticket.get-info';
import EventTicketCreate from './fetches/event-ticket.create';

import './App.css';

class App extends Component {

  render() {
    return <div className="App">
      <LocationCreate />
      <LocationGetInfo />
      <EventCreate />
      <EventGetInfo />
      <EventTicketCreate />
      <EventTicketGetInfo />
      <TransactionCreate />
      <TransactionGetInfo />
    </div>
  }

}

export default App;

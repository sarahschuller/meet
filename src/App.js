import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from './mock-data';
import { getEvents } from './api';

export const getEvents = async () => {
  return mockData;
};

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
  });
}

componentDidMount() {
  getEvents().then((events) => {
    this.setState({ events, locations: extractLocations(events) });
  });
}

class App extends Component {

  state ={
    events: [],
    locations: []
  }

  render() {
    return (
      <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />        
      <EventList events={this.state.events} />
      <NumberOfEvents />
      </div>
    );
  }
}

export default App;

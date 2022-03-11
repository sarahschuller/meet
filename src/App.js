import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
  }

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

componentWillUnmount(){
  this.mounted = false;
}

  render() {
    return (
      <div className="App">
      
      <NumberOfEvents />

      <CitySearch 
      locations={this.state.locations} 
      updateEvents={this.updateEvents} />  
      <EventList 
      events={this.state.events} />

     

      </div>
    );
  }
}

export default App;

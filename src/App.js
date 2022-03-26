import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 30,
  }

  updateNumberOfEvents = async (e) => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 30;
    if (newNumber <= 0 || newNumber > 30) {
      await this.setState({
        numberOfEvents: newNumber,
        errorAlert: 'Please enter a number between 1 and 30'
      });
    } else {
      await this.setState({
        errorAlert: '',
        numberOfEvents: newNumber
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all" && eventCount === 0
          ? events
          : location !== "all" && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  async componentDidMount() {
    this.mounted = true;
        getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
        }
      });

      if (!navigator.onLine) {
        this.setState({
          OfflineAlertText: 'You are not connected to the internet'
        });
      } else {
        this.setState({
          OfflineAlertText: ''
        });
      }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    const refreshPage = () => {
      window.location.reload();
    }

    if (this.state.showWelcomeScreen === undefined &&
      navigator.onLine && !window.location.href.startsWith('http://localhost')
    ) {
      return <div className='App' />;
    }
    if (this.state.showWelcomeScreen === true)
      return (
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      );

    const { locations, numberOfEvents, OfflineAlertText } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
      <OfflineAlert 
        text={OfflineAlertText} />

      <CitySearch 
        updateEvents={this.updateEvents} 
        locations={this.state.locations} />

      <NumberOfEvents
        updateNumberOfEvents={this.updateNumberOfEvents}
        numberOfEvents={this.state.numberOfEvents}
        />       
         <h4>Events in each city</h4>

        <ResponsiveContainer height={400}>
         <ScatterChart
          className="chart"
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />

          <XAxis 
          type="category" 
          dataKey="city" 
          name="City" />

          <YAxis 
          type="number" 
          dataKey="number" 
          name="Number of Events" 
          allowDecimals={false} />

          <Tooltip 
          cursor={{ strokeDasharray: '3 3' }} />

          <Scatter 
          data={this.getData()} 
          fill="#8884d8" />        
          </ScatterChart>

        </ResponsiveContainer>
        
        <EventList 
        events={this.state.events} />

        <WelcomeScreen 
        showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;

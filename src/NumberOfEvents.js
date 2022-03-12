import React, { Component } from 'react';

class NumberOfEvents extends Component {
     state = {
         numberOfEvents: '30',
         infoText: "",
       }

       handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 30) {
          this.setState({
            numberOfEvents: "",
            infoText: "Please enter a number between 1 and 32",
          });
        } else {
          this.setState({
            numberOfEvents: value,
            infoText: "",
          });
        }
        this.props.updateNumberOfEvents(event.target.value);
      };

    render() {
      return(
      <div className="NumberOfEvents">
        <p>Number of Events</p>
          <input 
          type="number" 
          className="numberOfEvents"
          value={this.state.numberOfEvents} 
          onChange={this.handleInputChange}
          />
      </div>

      )
 }};
export default NumberOfEvents;
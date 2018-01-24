import React, { Component } from "react";

import "./App.css";
import axios from "../axios";
import Event from "../components/Event/Event";
import Spinner from "../UI/Spinner/Spinner";

class App extends Component {
  state = {
    events: null,
    loading: true,
    error: false
    // errorMessage: null
  };

  componentDidMount() {
    axios
      .get("/events.json")
      .then(response => {
        const fetchedEvents = response.data; // fetched events need to have a unique key
        this.setState({ loading: false, events: fetchedEvents.events });
      })
      .catch(error => {
        // this.setState({ loading: false, error: true, errorMessage: error });
        this.setState({ loading: false, error: true });
        console.log(error);
      });
  }

  render() {
    let events = null;

    if (this.state.loading) {
      events = <Spinner />;
    }

    if (this.state.error) {
      events = <p style={{ textAlign: "left" }}>Something went wrong!</p>;
    }

    if (this.state.events) {
      events = this.state.events.map(event => {
        // check if seats are available
        if (event.available_seats > 0) {
          // using date as unique key
          return (
            <div className="singleEvent" key={event.date}>
              <Event event={event} />
            </div>
          );
        } else {
          return null;
        }
      });
    }

    return (
      <div className="App">
        <h1>Bridj Events with available seats</h1>
        {events}
      </div>
    );
  }
}

export default App;

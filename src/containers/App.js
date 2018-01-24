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
  };

  componentDidMount() {
    axios
      .get("/events.json")
      .then(response => {
        const fetchedEvents = response.data;
        this.setState({ loading: false, events: fetchedEvents.events });
        console.log(this.state.events);
      })
      .catch(error => {
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
      events = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    }

    if (this.state.events) {
      events = this.state.events.map(event => {
        return (
          <div className="singleEvent" key={event.date}>
            <Event event={event} />
          </div>
        );
      });
    }

    return <div className="App">{events}</div>;
  }
}

export default App;
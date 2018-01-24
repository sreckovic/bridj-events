import React, { Component } from "react";

import "./App.css";
import axios from "../axios";
import Event from "../components/Event/Event";
import Spinner from "../UI/Spinner/Spinner";
import Filter from "../components/Filter/Filter";
import Sort from "../components/Sort/Sort";

class App extends Component {
  state = {
    events: null,
    initialEvents: null,
    sortedEvents: null,
    loading: true,
    error: false,
    sortBy: null,
    // errorMessage: null,
    filter: ""
  };

  componentDidMount() {
    axios
      .get("/events.json")
      .then(response => {
        const fetchedEvents = response.data; // fetched events need to have a unique key
        this.setState({
          loading: false,
          initialEvents: fetchedEvents.events, // set default events
          events: fetchedEvents.events
        });
      })
      .catch(error => {
        // this.setState({ loading: false, error: true, errorMessage: error });
        this.setState({ loading: false, error: true });
        console.log(error);
      });
  }

  onFilterChange = e => {
    const newFilter = e.target.value;
    let filteredEvents = this.state.initialEvents; // reset events we filter!

    filteredEvents = filteredEvents.filter(event => {
      return event.name.toLowerCase().search(newFilter.toLowerCase()) !== -1;
    });

    this.setState({ filter: newFilter, events: filteredEvents });
  };

  onSortClick = e => {
    e.preventDefault();

    this.setState({ sortBy: e.target.id });
    console.log(this.state.sortBy);
  };

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
        <Filter
          label="filter the events by the name of the venue"
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <Sort onSortClick={this.onSortClick} />
        {events}
      </div>
    );
  }
}

export default App;

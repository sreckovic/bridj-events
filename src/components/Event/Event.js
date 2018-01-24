import React from "react";

import Aux from "../../hoc/Aux/Aux";

const event = ({ event }) => {
  const d = new Date(event.date);
  let eventDate, minutes, eventTime;

  if (isNaN(d)) {
    eventDate = null;
    eventTime = null;
  } else {
    eventDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    minutes =
      d.getMinutes().toString().length > 1
        ? d.getMinutes().toString().length
        : "0" + d.getMinutes().toString();

    eventTime = d.getHours() + ":" + minutes;
  }

  return (
    <Aux>
      <h2>{event.name}</h2>

      <p>Venue: {event.venue}</p>
      <p>
        {eventDate !== null && eventTime !== null
          ? eventDate + " at " + eventTime
          : "Event date currently not available."}
      </p>
      <p>Available seats: {event.available_seats}</p>
      <p>
        Price: <strong>${event.price}</strong>
      </p>
      <p>
        Tags:
        {event.labels.map(label => {
          return <span key={label}> {label}</span>;
        })}
      </p>
    </Aux>
  );
};

export default event;

import React from "react";

import Aux from "../../hoc/Aux/Aux";

const event = props => {
  const d = new Date(props.event.date);
  let newEventDate, minutes, newEventTime;

  if (isNaN(d)) {
    newEventDate = null;
    newEventTime = null;
  } else {
    newEventDate =
      d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    minutes =
      d.getMinutes().toString().length > 1
        ? d.getMinutes().toString().length
        : "0" + d.getMinutes().toString();

    newEventTime = d.getHours() + ":" + minutes;
  }

  return (
    <Aux>
      <h2>{props.event.name}</h2>

      <p>Venue: {props.event.venue}</p>
      <p>
        {newEventDate !== null && newEventTime !== null
          ? newEventDate + " at " + newEventTime
          : "Event date is not currently available."}
      </p>
      <p>Available seats: {props.event.available_seats}</p>
      <p>
        Price: <strong>${props.event.price}</strong>
      </p>
      <p>
        Tags:
        {props.event.labels.map(label => {
          return <span key={label}> {label}</span>;
        })}
      </p>
    </Aux>
  );
};

export default event;

import React from "react";

import Aux from "../../hoc/Aux/Aux";

const event = props => {
  return (
    <Aux>
      <h2>{props.event.name}</h2>

      <p>Venue: {props.event.venue}</p>
      <p>Date: {props.event.date}</p>
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

import React from "react";

import Aux from "../../hoc/Aux/Aux";

const event = props => {
  return (
    <Aux>
      <h2>{props.event.name}</h2>
      <p>Date: {props.event.date}</p>
      <p>Available seats: {props.event.available_seats}</p>
      <p>
        Price: <strong>${props.event.price}</strong>
      </p>
      <p>Venue: {props.event.venue}</p>
      <p>
        {props.event.labels.map((label, i) => {
          console.log(label, i);
          return label;
          //return label[i] + " ";
        })}
      </p>
    </Aux>
  );
};

export default event;

import React from "react";

import Aux from "../../hoc/Aux/Aux";

const event = props => {
  return (
    <Aux>
      <h2>{props.event.name}</h2>
      {console.log(props.event)}
    </Aux>
  );
};

export default event;

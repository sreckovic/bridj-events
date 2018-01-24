import React from "react";

import "./Filter.css";

const filter = ({ label }) => {
  return (
    <div className="filter">
      {label ? <label>{label}</label> : null}
      <input />
    </div>
  );
};

export default filter;

import React from "react";

import "./Filter.css";

const filter = ({ label, filter, onFilterChange }) => {
  return (
    <div className="filter">
      {label ? <label>{label}</label> : null}
      <input value={filter} onChange={onFilterChange} />
    </div>
  );
};

export default filter;

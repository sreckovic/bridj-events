import React from "react";

import "./Sort.css";

const sort = props => {
  return (
    <ul className="sort">
      <li>Sort:</li>
      <li>
        <a href="">name</a>
      </li>
      <li>
        <a href="">date</a>
      </li>
      <li>
        <a href="">available seats</a>
      </li>
      <li>
        <a href="">price</a>
      </li>
    </ul>
  );
};

export default sort;

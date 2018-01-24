import React from "react";

import "./Sort.css";

const sort = ({ onSortClick }) => {
  return (
    <ul className="sort">
      <li>Sort:</li>
      <li>
        <a href="#name" id="name" onClick={onSortClick}>
          name
        </a>
      </li>
      <li>
        <a href="#date" id="date" onClick={onSortClick}>
          date
        </a>
      </li>
      <li>
        <a href="#seats" id="seats" onClick={onSortClick}>
          available seats
        </a>
      </li>
      <li>
        <a href="#price" id="price" onClick={onSortClick}>
          price
        </a>
      </li>
    </ul>
  );
};

export default sort;

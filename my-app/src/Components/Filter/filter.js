import React, { useState } from "react";
import "./filter.css";

function Filter({ filterChange, itemTypeFilterChange }) {
  const [selectedItemTypeFilter, setSelectedItemTypeFilter] = useState("Item");

  function handleClick(event) {
    filterChange(event.target.value);
  }

  function handleItemType(event) {
    setSelectedItemTypeFilter(event.target.value);
    itemTypeFilterChange(event.target.value);
  }

  return (
    <div className="filter">
      <div className="filterBarDemographic">
        <select name="Shop by" onChange={handleClick}>
          <option>Shop By</option>
          <option>Mens</option>
          <option>Womens</option>
          <option>Boys</option>
          <option>Girls</option>
        </select>
      </div>

      <div className="filterBarItem">
        <select name="Shop by item type" onChange={handleItemType}>
          <option value="Item">Item</option>
          <option value="Trainers">Trainers</option>
          <option value="Joggers">Joggers</option>
          <option value="Sweatshirt">Sweatshirt</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Jacket">Jacket</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
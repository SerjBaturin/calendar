import React from "react";
import ToggleCalendar from "../ToggleCalendar/ToggleCalendar";
import "./style.css";

const SearchPanel = (props) => {
  return (
    <div className="search-panel">
      <ToggleCalendar />
    </div>
  );
};

export default SearchPanel;

import React from "react";
import { connect } from "react-redux";
import { toggleAction } from "../redux/actions";
import "./style.css";

const ToggleCalendar = ({ toggleCalendarHandler, dateRange }) => {
  return (
    <div className="toggle-calendar" onClick={toggleCalendarHandler}>
      <i className="fa fa-calendar" aria-hidden="true"></i>
      <span>{dateRange}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dateRange: state.datePick,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCalendarHandler: () => dispatch(toggleAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleCalendar);

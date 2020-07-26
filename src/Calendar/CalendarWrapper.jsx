import React from "react";
import { connect } from "react-redux";
import "./style.css";
import Calendar from "react-date-range-calendar";
import { toggleAction, datePick, rangeToChart } from "../redux/actions";
import { today, yesterday, lastSevenDays } from "./dateHandlers";

const CalendarWrapper = ({
  toggle,
  closeCalendar,
  dateRanger,
  rangeToChart,
}) => {
  const clickHandler = (e) => {
    dateRanger(e.target.getAttribute("date-range"));
    closeCalendar();
  };

  const dateFormatter = (date) =>
    new Date(date).toLocaleDateString("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  return (
    <div className={`calendar ${toggle ? "calendar_open" : "calendar_close"}`}>
      <div className="calendar-wrapper">
        <Calendar
          rightArrowCss="&:hover { background: #ef7501; }"
          leftArrowCss="&:hover { background: #ef7501; }"
          onHoverTdCssObj={{
            backgroundColor: "#f0a211",
            color: "#fff",
          }}
          inRangedTdCssObj={{ backgroundColor: "#f0a211" }}
          startDateTdCssObj={{ backgroundColor: "#ef7501" }}
          endDateTdCssObj={{ backgroundColor: "#ef7501" }}
          onSelect={(startDate, endDate, validDateRange) => {
            dateRanger(
              `${dateFormatter(startDate)} - ${dateFormatter(endDate)}`,
            );
            rangeToChart(validDateRange);
            setTimeout(() => closeCalendar(), 500);
          }}
        />
        <div className="calendar__dialog">
          <ul className="calendar__dialog__list">
            <li
              className="calendar__dialog__list__item"
              onClick={(e) => clickHandler(e)}
              date-range={today()}
            >
              Today
            </li>
            <li
              className="calendar__dialog__list__item"
              onClick={(e) => clickHandler(e)}
              date-range={yesterday()}
            >
              Yesterday
            </li>
            <li
              className="calendar__dialog__list__item"
              onClick={(e) => clickHandler(e)}
              date-range={lastSevenDays()}
            >
              Last 7 days
            </li>
            <li className="calendar__dialog__list__item">Last 30 days</li>
            <li className="calendar__dialog__list__item">Last month</li>
            <li className="calendar__dialog__list__item">This year</li>
            <li className="calendar__dialog__list__item">Lifetime</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toggle: state.toggleCalendar,
    initialDate: state.datePick,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeCalendar: () => dispatch(toggleAction()),
    dateRanger: (payload) => dispatch(datePick(payload)),
    rangeToChart: (payload) => dispatch(rangeToChart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarWrapper);

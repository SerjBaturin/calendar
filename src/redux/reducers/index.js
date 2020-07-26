import { combineReducers } from "redux";
import toggleCalendar from "./toggleCalendar";
import datePick from "./datePick";
import rangeToChart from "./rangeToChart";

export default combineReducers({
  toggleCalendar,
  datePick,
  rangeToChart,
});

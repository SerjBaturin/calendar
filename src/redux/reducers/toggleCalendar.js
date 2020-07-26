import { types } from "../actions";
const toggleCalendar = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_ACTION:
      return !state;
    default:
      return state;
  }
};

export default toggleCalendar;

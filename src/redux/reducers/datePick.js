import { types } from "../actions";

const now = `${new Date().toLocaleString("en", {
  month: "short",
})} ${new Date().getDate()}, ${new Date().getFullYear()} `;

const initialState = `${new Date().toLocaleString("en", {
  month: "short",
})} ${new Date().getDate() - 7}, ${new Date().getFullYear()} - ${now}`;

const datePick = (state = initialState, action) => {
  switch (action.type) {
    case types.DATE_PICK:
      return action.payload;
    default:
      return state;
  }
};

export default datePick;

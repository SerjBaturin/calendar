import { types } from "../actions";

const initialState = [
  "2020-07-01",
  "2020-07-02",
  "2020-07-03",
  "2020-07-04",
  "2020-07-05",
  "2020-07-06",
  "2020-07-07",
  "2020-07-08",
  "2020-07-09",
  "2020-07-10",
  "2020-07-11",
  "2020-07-12",
  "2020-07-13",
  "2020-07-14",
  "2020-07-15",
  "2020-07-16",
  "2020-07-17",
];

const rangeToChart = (state = initialState, action) => {
  switch (action.type) {
    case types.RANGE_TO_CHART:
      return action.payload;
    default:
      return state;
  }
};

export default rangeToChart;

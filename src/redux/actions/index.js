export const types = {
  TOGGLE_ACTION: "TOGGLE_ACTION",
  DATE_PICK: "DATE_PICK",
  RANGE_TO_CHART: "RANGE_TO_CHART",
};

export const toggleAction = () => ({ type: types.TOGGLE_ACTION });
export const datePick = (payload) => ({ type: types.DATE_PICK, payload });
export const rangeToChart = (payload) => ({
  type: types.RANGE_TO_CHART,
  payload,
});

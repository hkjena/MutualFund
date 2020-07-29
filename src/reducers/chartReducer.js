const chartReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CHART_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default chartReducer;

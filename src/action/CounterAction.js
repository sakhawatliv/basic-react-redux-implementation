export const actionCreator = {
  requestCount: () => (dispatch, getState) => {
    dispatch({ type: "INCREMENT", count: 100 });
  }
};

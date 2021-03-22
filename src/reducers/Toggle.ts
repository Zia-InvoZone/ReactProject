const toggle = (state = { State: false }, action: any) => {
  switch (action.type) {
    case "Toggle_Async":
      console.log("type", state);
      return {
        State: !state.State,
        Data: action.ApiData,
      };
    default:
      return state;
  }
};

export default toggle;

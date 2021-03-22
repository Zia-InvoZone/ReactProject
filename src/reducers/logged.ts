const logged = (state = { userState: false, userData: "" }, action: any) => {
  switch (action.type) {
    case "SignIn":
      return {
        userState: true,
        userData: action.user,
      };
    case "SignOut":
      return {
        userState: false,
        userData: "",
      };
    default:
      return state;
  }
};
export default logged;

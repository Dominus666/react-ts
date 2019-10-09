import AuthDefaultState from "../states/auth.state";

const AuthReducer = (state = AuthDefaultState, action: any) => {
  switch (action.type) {
    case "SIGN_IN": {
      return state = action
    }
    default: return { ...state };
  }
};

export default AuthReducer;
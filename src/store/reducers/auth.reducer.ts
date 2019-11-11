import AuthDefaultState from "../states/auth.state";
import * as types from '../actionsTypes/auth.actionsTypes';

const AuthReducer = (state = AuthDefaultState, action: any) => {
  switch (action.type) {
    case types.SIGN_IN : {
      return state = action
    }
    default: return { ...state };
  }
};

export default AuthReducer;
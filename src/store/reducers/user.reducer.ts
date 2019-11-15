import UserDefaultState from "../states/user.state";
import * as types from '../actionsTypes/user.actionsTypes';

const UserReducer = (state = UserDefaultState, action: any) => {
  switch (action.type) {
    case types.LOGIN : {
      return {
        ...state,
        user: action.user
      }
    }
    default: return { ...state };
  }
};

export default UserReducer;
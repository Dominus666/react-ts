import CommonDefaultState from "../states/common.state";

const CommonReducer = (state = CommonDefaultState, action: any) => {
  switch (action.type) {
    case 'SET_NOTIFICATION': {
      return {
        ...state,
        ...action.notification
      }
    }
    case 'CLEAR_NOTIFICATION': {
      return {
        ...state,
        ...action.notification
      }
    }
    default: return { ...state };
  }
};

export default CommonReducer;
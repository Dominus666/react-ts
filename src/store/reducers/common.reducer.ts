import CommonDefaultState from "../states/common.state";
import * as types from '../actionsTypes/common.actionsTypes';

const PostReducer = (state = CommonDefaultState, action: any) => {
  switch (action.type) {
  
    case types.LOADING: {
      return {
        ...state,
        loading: !state.loading
      };
    }
    default: return { ...state };
  }
};

export default PostReducer;
import PostDefaultState from "../states/post.state";
import * as types from '../actionsTypes/post.actionsTypes';

const PostReducer = (state = PostDefaultState, action: any) => {
  switch (action.type) {
  
    case types.GET_POSTS : {
      return {
        ...state,
        posts: action.posts
      }
    }
    default: return { ...state };
  }
};

export default PostReducer;
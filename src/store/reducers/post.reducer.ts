import PostDefaultState from "../states/post.state";
import * as types from '../actionsTypes/post.actionsTypes';

const PostReducer = (state = PostDefaultState, action: any) => {
  switch (action.type) {
  
    case types.GET_POSTS : {
      return {
        ...state,
        posts: action.posts
      };
    }
    case types.GET_POST_BY_ID : {
      return {
        ...state,
        post: action.postById
      }
    }
    case types.CREATE_POST : {
      let newPosts = state.posts;
      newPosts.push(action.post);
      return {
        ...state,
        posts: newPosts
      };
    }
    default: return { ...state };
  }
};

export default PostReducer;
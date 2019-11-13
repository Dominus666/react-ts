import * as types from '../actionsTypes/post.actionsTypes';
import Posts from '../../shared/service/post.service';

export const getPosts = () => async (dispatch:any) => {
  try {
    const posts = await Posts.getPosts();
    dispatch({ type: types.GET_POSTS, posts });
  } catch (error) {
    console.error(error);
  };
}
import * as types from '../actionsTypes/post.actionsTypes';
import { setLoading } from '../actions/common.actions'
import PostsService from '../../shared/service/post.service';
import Post from '../../shared/models/post.model';


export const getPosts = () => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const posts = await PostsService.getPosts();
    dispatch({ type: types.GET_POSTS, posts });
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  };
};

export const getPostById = (id: string) => async (dispatch: any) => {
  try {
    const postById = await PostsService.getPostById(id)
    dispatch({ type: types.GET_POST_BY_ID, postById });
  } catch(error) {
    console.log(error)
  }
}

export const createPost = (data: any) => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const post:Post = await PostsService.createPost(data);
    dispatch({ type: types.CREATE_POST, post })
    dispatch(setLoading());
  } catch (error) {
    console.log(error)
  }
};
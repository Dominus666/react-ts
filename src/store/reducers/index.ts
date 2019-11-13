
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import AuthReducer from './auth.reducer';
import PostReducer from './post.reducer';

export default (history: any) => combineReducers({
  AuthReducer,
  PostReducer,
  router: connectRouter(history)
})

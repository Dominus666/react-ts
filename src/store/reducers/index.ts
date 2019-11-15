
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import UserReducer from './user.reducer';
import PostReducer from './post.reducer';
import CommonReducer from './common.reducer';

export default (history: any) => combineReducers({
  UserReducer,
  PostReducer,
  CommonReducer,
  router: connectRouter(history)
})

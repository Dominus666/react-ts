import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import PostReducer from './post.reducer';


const reducers = combineReducers({
  AuthReducer,
  PostReducer
});

export default reducers;
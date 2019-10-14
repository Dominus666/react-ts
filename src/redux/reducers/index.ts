import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import ProductsReducer from './products.reduser';
import CommonReducer from './common.reducer';


const reducers = combineReducers({
  AuthReducer,
  ProductsReducer,
  CommonReducer
});

export default reducers;
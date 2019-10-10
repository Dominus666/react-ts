import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import ProductsReducer from './products.reduser';


const reducers = combineReducers({
  AuthReducer,
  ProductsReducer
});

export default reducers;
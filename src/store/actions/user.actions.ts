import * as types from '../actionsTypes/user.actionsTypes';
import User from '../../shared/models/user.model';
import UserService from '../../shared/service/user.service'

export const signIn = (userData: any) => async (dispatch: any) => {
  try {
    const user: User = await UserService.signIn(userData);
    dispatch({ type: types.LOGIN , user });
  } catch (error) {
    console.error(error);
  };
}

export const signUp = (userData: any) => async (dispatch: any) => {
  try {
    const user: User = await UserService.signUp(userData)
    dispatch({ type: types.LOGIN , user });
  } catch (error) {
    console.error(error);
  };
};
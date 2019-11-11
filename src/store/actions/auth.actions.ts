import * as types from '../actionsTypes/auth.actionsTypes';

export const signIn = (user: any) => {
  console.log(user)
  return { type: types.SIGN_IN , user }
}
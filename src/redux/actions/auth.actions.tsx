import User from '../../models/user.models';

export const signIn = (user: User) => {
  console.log(user)
  return { type: 'SIGN_IN', user }
}
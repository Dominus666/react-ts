import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from '../containers/Auth/SignIn/SignIn';
import SignUp from '../containers/Auth/SignUp/SignUp';
import ForgotPassword from '../containers/Auth/ForgotPassword/ForgotPassword';

const authRoutes = (
  <Switch>
    <Route component={SignIn} path='/auth/sign-in'/>
    <Route component={SignUp} path='/auth/sign-up' />
    <Route component={ForgotPassword} path='/auth/forgot-password' />
    <Redirect from="/auth" to="/auth/sign-in" />
  </Switch>
);
 export default authRoutes;
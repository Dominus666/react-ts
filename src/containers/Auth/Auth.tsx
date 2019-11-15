import React from 'react';

import './Auth.scss';
import authRoutes from '../../routes/authRoutes';

interface Props {};
interface State {};

class Auth extends React.Component<Props, State> {
  render () {
    return (
      <div className="auth-wrapper">
        {/* {this.renderPage()} */}
        {authRoutes}
      </div>
    )
  };
};

export default Auth;
import React from 'react';
import SignIn from '../../Auth/SignIn/SignIn';

interface State {}
interface Props {}

class Auth extends React.Component<Props, State> {
  render() {
    return(
      <div>
        <SignIn />
      </div>
    )
  }
}

export default Auth;
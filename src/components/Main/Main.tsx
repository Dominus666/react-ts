import React from 'react';
import './Main.scss';
import Auth from '../pages/Auth/Auth';

interface State { }
interface Props { }

class Main extends React.Component<Props, State> {
  render() {
    return (
      <div className="main-wrapper">
        <div className="header"></div>
        <div className="body">
          <Auth />
        </div>
      </div>
    )
  }
}

export default Main;
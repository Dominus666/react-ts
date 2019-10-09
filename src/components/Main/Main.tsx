import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Main.scss';
import Auth from '../pages/Auth/Auth';
import Home from '../pages/Home/Home';

interface State { }
interface Props { }

class Main extends React.Component<Props, State> {
  render() {
    const linksInit = [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Sign In',
        to: '/sign-in'
      }
    ];

    const links = linksInit.map((link, index) => {
      return (
        <li key={index}>
          <Link to={link.to}>{link.name}</Link>
        </li>
      )
    });
    return (
      <div className="main-wrapper">
        <div className="header">
          <ul>
            {links}
          </ul>
        </div>
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={Auth} />
        </div>
      </div>
    )
  }
}

export default Main;
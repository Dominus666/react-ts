import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './Main.scss';
import Notifications from '../Notifications/Notifications';
import Auth from '../pages/Auth/Auth';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';


interface State {
  drawer: boolean;
}
interface Props {
  user: {
    email: string;
    role: number;
  };
}

class Main extends React.Component<Props, State> {

  render() {
    const linksInit = [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Products',
        to: '/products'
      }
    ];
    const links = linksInit.map((link, index) => {
      return (
        <Link className="link" to={link.to} key={index}>{link.name}</Link>
      )
    });
    return (
      <div className="main-wrapper">
        <Notifications />
        <div className="header">
          <div>
            {links}
          </div>
          <div>
            {
              this.props.user.email === ''
                ? <Link className="link" to="/sign-in">Sign In</Link>
                : <span>Sign Out</span>
            }
          </div>

        </div>
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/sign-in" component={Auth} />
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state: any) => ({
  user: state.AuthReducer,
})

export default connect(mapStateToProps)(Main);
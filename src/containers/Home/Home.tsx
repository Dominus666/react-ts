import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../../components/Header/Header';
import Posts from '../Posts/Posts';
import CreatePost from '../CreatePost/CreatePost';

class Home extends React.Component {
  render () {
    return(
      <div className="app-wrapper">
        <Header/>
        <div className="content-wrapper">
          <Switch>
            <Route component={Posts} path='/posts' />
            <Route component={CreatePost} path='/create-post' />
          </Switch>
        </div>
      </div>
    )
  }
};

export default Home;
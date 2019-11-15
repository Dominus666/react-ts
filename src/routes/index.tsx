import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from '../containers/Auth/Auth';
import Posts from '../containers/Posts/Posts';
import Post from '../containers/Post/Post';
import CreatePost from '../containers/CreatePost/CreatePost';
const routes = (
  <Switch>
    <Route component={Posts} path='/' exact />
    <Route component={Post} path='/post/:id'/>
    <Route component={CreatePost} path='/create-post'/>
    <Route component={Auth} path='/auth' />
  </Switch>
);
 export default routes;
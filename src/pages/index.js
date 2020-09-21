import React from 'react';
import { Switch, Route } from 'react-router-native';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
    </Switch>
  );
};

export default Pages;

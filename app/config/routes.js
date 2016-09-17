import React from 'react';
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
import Main from '../components/Main';
import Home from '../components/Home';
import RegularHomeContainer from '../containers/RegularHomeContainer';
import Club_O_RewardsContainer from '../containers/Club_O_RewardsContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='regularHome' component={RegularHomeContainer} />
      <Route path='club_O_Rewards' component={Club_O_RewardsContainer} />
    </Route>
  </Router>
);

module.exports = routes;

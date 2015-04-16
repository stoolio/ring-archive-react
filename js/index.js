import React from 'react';
// import * as Router from 'react-router';
// let Route = Router.Route;
// let Link = Router.Link;
// let RouteHandler = Router.RouteHandler;
// let DefaultRoute = Router.DefaultRoute;
// let NotFoundRoute = Router.NotFoundRoute;

import {Route, NotFoundRoute, DefaultRoute, Link, RouteHandler, run} from 'react-router';

import {Home, EngagementRings, EngagementRing, RootNotFound} from './routes/All';

import Header from './components/Header';
import Footer from './components/Footer';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});

let routes = (
  <Route name='app' path='/' handler={App}>
    <Route path='engagement-rings'>
      <Route name='ring-detail' path=':sku' handler={EngagementRing} />
      <DefaultRoute name='engagement-rings' handler={EngagementRings} />
    </Route>
    <DefaultRoute name='home' handler={Home} />
    <NotFoundRoute handler={RootNotFound} />
  </Route>
);

run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

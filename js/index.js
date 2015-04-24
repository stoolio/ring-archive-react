require('../scss/app.scss');
import React from 'react';

import {Route, NotFoundRoute, DefaultRoute, Link, RouteHandler, run} from 'react-router';

import {Home, EngagementRings, EngagementRing, Diamonds, DiamondQuote, About, Policy, Contact, RootNotFound} from './routes/';

import Header from './components/Header';
import Footer from './components/Footer';

import {Row, Column} from './structure/';

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
    <Route name='diamonds/quote' handler={DiamondQuote} />
    <Route name='diamonds' handler={Diamonds} />
    <Route name='about' handler={About} />
    <Route name='policies'>
      <Route name='policy' path=':policy' handler={Policy} />
      <DefaultRoute handler={Policy} />
    </Route>
    <Route name='contact' handler={Contact} />
    <DefaultRoute name='home' handler={Home} />
    <NotFoundRoute handler={RootNotFound} />
  </Route>
);

run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

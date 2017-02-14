import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';
import Product from './components/Product';
import Example from './components/Example';
import Order from './components/Order';
import News from './components/News';
import Welware from './components/Welware';
import Brand from './components/Brand';
import News1 from './components/News1';
import News2 from './components/News2';
import Home from './components/Home';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/example" component={Example} />
      <Route path="/welware" component={Welware} />
      <Route path="/order" component={Order} />
      <Route path="/brand" component={Brand} />
      <Route path="/news" component={News} />
      <Route path="/news1" component={News1} />
      <Route path="/news2" component={News2} />
    </Route>
  </Router>), document.getElementById('content')
);

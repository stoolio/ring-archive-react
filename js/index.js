import React from 'react';
import Product from './components/Product';

var data = {
  
}

React.render(
  <Product url='test.url'
           title='My ring'
           imgSrc='/img/ring.jpg'
           price='2400' />,
  document.getElementById('content')
);

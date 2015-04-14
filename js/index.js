import React from 'react';
import FullRow from './structure/FullRow';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';

import Animate from './lib/CSSAnimator';
import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';
// import Row from './structure/Row';

var data = [
  {
    sku: 'A',
    url: '#',
    name: 'Heart Ring',
    imgSrc: 'img/ring01.jpg',
    price: 1000
  },
  {
    sku: 'B',
    url: '#',
    name: 'Oval Ring',
    imgSrc: 'img/ring02.jpg',
    price: 2000
  },
  {
    sku: 'C',
    url: '#',
    name: 'Pear Ring',
    imgSrc: 'img/ring03.jpg',
    price: 3000
  },
  {
    sku: 'D',
    url: '#',
    name: 'Cushion Ring',
    imgSrc: 'img/ring04.jpg',
    price: 4000
  },
  {
    sku: 'E',
    url: '#',
    name: 'Round Ring',
    imgSrc: 'img/ring05.jpg',
    price: 5000
  },
  {
    sku: 'F',
    url: '#',
    name: 'Heart Ring',
    imgSrc: 'img/ring06.jpg',
    price: 1500
  },
  {
    sku: 'G',
    url: '#',
    name: 'Oval Ring',
    imgSrc: 'img/ring07.jpg',
    price: 2500
  },
  {
    sku: 'H',
    url: '#',
    name: 'Pear Ring',
    imgSrc: 'img/ring08.jpg',
    price: 3500
  },
  {
    sku: 'I',
    url: '#',
    name: 'Cushion Ring',
    imgSrc: 'img/ring09.jpg',
    price: 4500
  },
  {
    sku: 'J',
    url: '#',
    name: 'Round Ring',
    imgSrc: 'img/ring10.jpg',
    price: 1250
  },
  {
    sku: 'K',
    url: '#',
    name: 'Heart Ring',
    imgSrc: 'img/ring11.jpg',
    price: 2250
  },
  {
    sku: 'L',
    url: '#',
    name: 'Oval Ring',
    imgSrc: 'img/ring12.jpg',
    price: 3250
  },
  {
    sku: 'M',
    url: '#',
    name: 'Pear Ring',
    imgSrc: 'img/ring13.jpg',
    price: 4250
  },
  {
    sku: 'N',
    url: '#',
    name: 'Cushion Ring',
    imgSrc: 'img/ring14.jpg',
    price: 1600
  },
  {
    sku: 'O',
    url: '#',
    name: 'Round Ring',
    imgSrc: 'img/ring15.jpg',
    price: 2600
  }
];

React.render(
  <FullRow>
    <FullRow>
      <Header />
    </FullRow>
    <FullRow>
      <ProductDisplay data={data} />
    </FullRow>
  </FullRow>,
  document.getElementById('content')
);

window.React = React;
window.Animate = Animate;
window.ReactTransitionEvents = ReactTransitionEvents;

import React from 'react';
import ProductList from './components/ProductList';

var data = [
  {
    url: '#',
    title: 'Heart Ring',
    imgSrc: 'img/ring1.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Oval Ring',
    imgSrc: 'img/ring2.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Pear Ring',
    imgSrc: 'img/ring3.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Cushion Ring',
    imgSrc: 'img/ring4.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Round Ring',
    imgSrc: 'img/ring5.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Heart Ring',
    imgSrc: 'img/ring1.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Oval Ring',
    imgSrc: 'img/ring2.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Pear Ring',
    imgSrc: 'img/ring3.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Cushion Ring',
    imgSrc: 'img/ring4.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Round Ring',
    imgSrc: 'img/ring5.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Heart Ring',
    imgSrc: 'img/ring1.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Oval Ring',
    imgSrc: 'img/ring2.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Pear Ring',
    imgSrc: 'img/ring3.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Cushion Ring',
    imgSrc: 'img/ring4.jpg',
    price: 2400
  },
  {
    url: '#',
    title: 'Round Ring',
    imgSrc: 'img/ring5.jpg',
    price: 2400
  }
];

React.render(
  <ProductList data={data} />,
  document.getElementById('content')
);

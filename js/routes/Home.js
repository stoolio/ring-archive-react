import React from 'react';
import {Link} from 'react-router';

import FullRow from './../structure/FullRow';

const Home = React.createClass({
  render() {
    let imgStyle = {margin: '0 auto', display: 'block'};
    return (
      <FullRow>
        <div className='row'>
          <div className='large-12 columns'>
            <div className='slider'>
              <img src='/img/three_engagement_rings.jpg' />
            </div>
            <hr />
            <h4 className='text-center'>
              We make it easy to find the perfect diamond and create the ring of your dreams...
            </h4>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='medium-4 columns'>
            <img src='/img/diamond.jpg' style={imgStyle} />
            <h3>Select your diamond</h3>

            <p>Overwhelmed by the selection and number of options available to you?</p>

            <p>That&#39;s not to mention the new terminology and lingo that you&#39;ll need to learn.</p>

            <p>Luckily, we&#39;ve got you covered on both fronts. We&#39;ll pick you out a choice collection of stones, and we&#39;ll teach you the what you need to know to make an educated purchase.</p>

            <p>Just send us a request and let us do the hard work.</p>
          </div>
          <div className='medium-4 columns'>
            <img src='/img/cad.jpg' style={imgStyle} />
            <h3>Design your ring</h3>

            <p>Once you&#39;ve selected a diamond, we work with you to design the perfect ring to show it off.</p>

            <p>From contemporary Halo styles, to classNameic Solitaire designs, we can make them all.</p>

            <p>We will also help you so that you don&#39;t end up with a ring that has diamonds popping out left and right.</p>

            <p>Building a secure ring starts at the design process, so we take care to make sure we do it right.</p>
          </div>
          <div className='medium-4 columns'>
            <img src='/img/ring.jpg' style={imgStyle} />
            <h3>Get your ring</h3>

            <p>After we ensure that you have a ring that not only looks good, but will stay that way, we finish it to perfection.</p>

            <p>Using advanced materials like 14kt White Gold X1 and cutting edge CAD Design techniques, your ring is crafted with the same love and care that went into designing it.</p>

            <p>After every diamond is perfectly set, and every surface is polished to perfection, your ring will be ready to go.</p>
          </div>
        </div>
      </FullRow>
    );
  }

});

export default Home;

import React from 'react';

const Footer = React.createClass({
  render() {
    return (
      <footer className='row'>
        <div className='small-12 small-centered columns'>
          <hr />
          <div className='row'>
            <div className='small-6 large-3 columns'>
              <ul className='side-nav'>
                <li>
                  <a href='http://gale.diamonds/diamonds/'>Diamonds</a>
                </li>
                <li>
                  <a href='http://gale.diamonds/engagement-rings/'>Engagement Rings</a>
                </li>
                <li>
                  <a href='http://gale.diamonds/policies/privacy/'>Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className='small-6 large-3 columns'>
              <ul className='side-nav'>
                <li>
                  <a href='http://gale.diamonds/policies/returns/'>Return Policy</a>
                </li>
                <li>
                  <a href='http://gale.diamonds/policies/shipping/'>Shipping Policy</a>
                </li>
                <li>
                  <a href='http://gale.diamonds/contact/'>Customer Service</a>
                </li>
              </ul>
            </div>
            <div className='small-12 large-6 columns text-center'>
              <h4>Follow Us On</h4>
              <div className='social-profiles'>
                <a className='webicon facebook large' href='https://www.facebook.com/pages/Gale-Diamonds-Chicago/6552692301' target='_blank'>
                  Facebook
                </a>
                <a className='webicon foursquare large' href='https://foursquare.com/v/gale-diamonds-chicago/4f2c6d54771620a557b1c30b' target='_blank'>
                  FourSquare
                </a>
                <a className='webicon googleplus large' href='https://plus.google.com/110161168429850552751/posts' target='_blank'>
                  Google+
                </a>
                <a className='webicon pinterest large' href='http://www.pinterest.com/galediamonds/' target='_blank'>
                  Pinterest
                </a>
                <a className='webicon yelp large' href='http://www.yelp.com/biz/gale-diamonds-chicago-chicago' target='_blank'>
                  Yelp
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='small-12 text-center copyright'>
              &copy; Copyright 2014 Gale Diamonds Chicago
              <a href='http://gale.diamonds/policies/terms-of-service/'>Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

});

export default Footer;

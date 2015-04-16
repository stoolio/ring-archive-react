import React from 'react';
import {Row, Column} from '../structure/All';
import {Link} from 'react-router';

const DiamondPageHeader = React.createClass({
  render() {
    return (
      <Row>
        <Column large='8'>
          <div className='text-center'>
            <h1>Let us do the hard work for you</h1>
            <p>Purchasing a diamond can be a very intimidating process.</p>
            <p>You may only have to do it once in your life, but it's significance means you should take your time and make the right decision.</p>
            <p>Many jewelers might choose to include a large list of diamonds for you so you can try and sift through them to find your <em>diamond in the rough</em>.</p>
          </div>
        </Column>
        <Column large='4'>
          <div className='panel callout radius'>
            <h4>Don't know where to start?</h4>
            <p>Our <a href='http://gale.diamonds/education/'>education section</a>
             is a great place to learn the tricks of the trade.</p>
          </div>
        </Column>
      </Row>
    );
  }
});

const DiamondMidPage = React.createClass({
  render() {
    return (
      <div className='text-center'>
        <h3>We choose not to do that.</h3>
        <h2>Why not?</h2>
        <h3>That's what we're here for!</h3>
        <p>Our <em>mission</em> is to assist you in the selection of a beautiful diamond!</p>
        <p>We'd be happy to help you out, and we want you to feel comfortable contacting us, so you have a few options:</p>
      </div>
    );
  }
});

const Diamonds = React.createClass({
  render() {
    return (
      <Row>
        <Column large='12'>
          <DiamondPageHeader />
          <DiamondMidPage />
          <ul>
            <li>
              <strong>
                <a href='http://gale.diamonds/diamonds/quote/'>Fill out a form, get a quote</a>
              </strong>
            </li>
          </ul>
          <blockquote>
            <p>
              Yup, it's that easy. Rather than having to brave finding a diamond in the rough yourself, let us help.<br />It's that easy.
            </p>
          </blockquote>
          <ul>
            <li>
              <strong>
                <a href='http://gale.diamonds/contact/'>Fill out a quick contact form</a>
                or <a href='mailto:sales@galediamonds.com'>Send us an email direct</a>
              </strong>
            </li>
          </ul>
          <blockquote>
            <p>
              For best results, include a phone number so we can discuss your desires.
            </p>
          </blockquote>
          <ul>
            <li>
              <strong>
                <a href='tel:+1-312-920-0075'>Give us a call</a>
              </strong>
            </li>
          </ul>
          <blockquote>
            <p>
              On a cell phone, just click and we'll be speaking in seconds.<br /> Otherwise, pick up your favorite phone and dial <a href='tel:+1-312-920-0075'>312-920-0075</a>
            </p>
          </blockquote>
          <h3>If your not quite ready to start the diamond journey, feel free to:</h3>
          <ul>
            <li>
              <strong>
                <a href='http://gale.diamonds/education/'>Get Educated</a>
              </strong>
            </li>
          </ul>
          <blockquote>
            <p>
              Here you can learn important stuff, like <a href='/education/diamonds/'>what's important to know when purchasing a diamond</a>. In addition, you'll learn other fun things, like the (not so secret) industry lingo, so you'll know exactly how to describe the thing you liked on that one ring you saw.
            </p>
          </blockquote>
          <ul>
            <li>
              <strong>
                <a href='http://gale.diamonds/engagement-rings/'>Look at a selection of pretty rings</a>
              </strong>
            </li>
          </ul>
          <blockquote>
            <p>
              Although the custom design process requires you select a diamond first, choosing the right ring can be even trickier. Get a head start by browsing our selection and pick your favorites. We can then remix all of your favorite rings into the custom design of your dreams.
            </p>
          </blockquote>
        </Column>
      </Row>
    );
  }
});

export default Diamonds;

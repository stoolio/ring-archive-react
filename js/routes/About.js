import React from 'react';
import {Row, Column} from '../structure/';

const AboutSidebar = React.createClass({
  render() {
    return (
      <Column large='4'>
        <div className='results' data-results-for='email-signup-list'>
          <div className='template alert-box radius' data-alert style={{display: 'none'}}>
            <h4 className='results-text' style={{color: 'white'}}></h4>
            <a className='close' href='#'>&times;</a>
          </div>
        </div>
        <form action='/forms/signup/list/' data-abide='ajax' data-key='gdc_su_lis' id='email-signup-list' method='post'>
          <input name='loc' type='hidden' value='/about/|sidebar' />
          <div className='row'>
            <div className='large-12 columns'>
              <h2>
                Get Updates
              </h2>
              <label className='required'>
                Name
                <sup>
                  <span>*</span>
                  (required)
                </sup>
                <input autoComplete='name' name='name' placeholder='Enter your first and last name' required type='text' />
                <small className='error'>A name is required.</small>
              </label>
            </div>
            <div className='large-12 columns'>
              <label className='required'>
                Email
                <sup>
                  <span>*</span>
                  (required)
                </sup>
                <input autoComplete='email' name='e-mail' placeholder='myemail@provider.com' required type='email' />
                <small className='error'>A valid email address is required.</small>
              </label>
            </div>
          </div>
          <button className='button large radius' type='submit'>
            <span className='text'>
              Sign me up!
            </span>
            <div className='loading' style={{display: 'none'}}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </form>
        <h2>Where to Start:</h2>
        <div className='panel callout radius'>
          <h3><a href="/engagement-rings/">View Rings</a></h3>
          <p>It's never too early to browse beautiful engagment rings...</p>
        </div>
        <div className='panel callout radius'>
          <h3><a href="/diamonds/quote/">Request a Diamond Quote</a></h3>
          <p>Enter your request and we'll select the cream of the crop just for you</p>
        </div>
      </Column>
    );
  }
});

const AboutContent = React.createClass({
  render() {
    return (
      <Column large='8'>
        <h1>About Us</h1>
        <p>We've been custom crafting beautiful engagement rings for over 25 years in Chicago's historic diamond district.</p>
        <p>From diamonds handpicked just for you, to engagement rings tailored to your every desire, you will be sure to find exactly what your looking for.</p>
        <p>However, there are a few things you should know that make the Gale Diamonds experience a bit different:</p>
        <Row>
          <Column large='8'>
            <ul>
              <li>
                <h4>Custom Made Engagement Rings</h4>
                <ul>
                  <li>When we say custom, we really mean it. You won't find any piles of generic jewelry here.</li>
                  <li>No more sorting through a giant showroom full of of jewelry that <em>isn't quite right.</em></li>
                  <li>We will be designing a ring together. But don't worry, we know exactly what we're doing, and you'll have a blast.</li>
                </ul>
              </li>
            </ul>
            <p><a href="/engagement-rings/custom/" title="Custom Design">Learn about Custom Design here</a>.</p>
          </Column>
          <Column large='4'>
          </Column>
        </Row>
        <Row>
          <Column large='4'>
          </Column>
          <Column large='8'>
            <ul>
            <li><h4>Think Concierge, not Salesman</h4>
            <ul>
            <li>We get to know you, so we can use it along with our years of expertise to find you the perfect diamond.</li>
            <li>Set up an appointment, and get a private experience unrushed experience with no pushy sales tactics.</li>
            <li>During your appointment, you'll get to see diamonds through a loupe, just like the jeweler's do.</li>
            </ul></li>
            </ul>
          </Column>
        </Row>
        <Row>
          <Column large='8'>
            <ul>
              <li>
                <h4>To Engagement Rings...and Beyond!</h4>
                <ul>
                  <li>Whether it's wedding bands, earrings, or a unique anniversary gift, we've got you covered.</li>
                  <li>Complimentary with every purchase:
                    <ul>
                      <li>cleanings for the life of your jewelry</li>
                      <li>independent appraisal</li>
                      <li>compliments from strangers</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </Column>
          <Column large='4'>
          </Column>
        </Row>
        <Row>
          <Column large='12'>
            <h3>New Techniques, Old School Values</h3>
            <p>Although we use the latest technology to craft your engagement ring, we still believe in old-school values like customer service, phone calls, and face to face meetings.</p>
            <p>So, feel free to call us up at <a href='tel:+1-312-920-0075'>312-920-0075</a>
             and we can answer any of your questions, chat about what your searching for, or even set you up with an appointment.</p>
            <p>If your looking for directions and other contact information <a href='http://gale.diamonds/contact/'>we have a page just for you</a>.</p>
          </Column>
        </Row>
      </Column>
    );
  }
});

const About = React.createClass({
  render() {
    return (
      <Row>
        <Column large='12'>
          <AboutContent />
          <AboutSidebar />
        </Column>
      </Row>
    );
  }
});

export default About;

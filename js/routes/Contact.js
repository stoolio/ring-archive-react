import React from 'react';
import {Row, Column} from '../structure/';

const ContactContent = React.createClass({
  componentDidMount() {
    $(document).foundation('tab', 'reflow');
  },
  render() {
    return (
      <Column large='8'>
        <h1>Contact & Location Info</h1>
        <ul className='tabs' data-tab>
          <li className='tab-title active'>
            <a href='#contact'>Send us a message</a>
          </li>
          <li className='tab-title'>
            <a href='#directions'>Maps & Directions</a>
          </li>
        </ul>
        <div className='tabs-content'>
          <div className='content active' id='contact'>
            <h2>Contact Us</h2>
            <p>
              Enter your questions or request and we will get back to you as quickly as possible.
            </p>
            <div className='results' data-results-for='contact-us'>
              <div className='template alert-box radius' data-alert style={{display: 'none'}}>
                <h4 className='results-text' style={{color: 'white'}}></h4>
                <a className='close' href='#'>&times;</a>
              </div>
            </div>
            <form action='/contact/' data-abide='ajax' id='contact-us' method='post'>
              <fieldset>
                <legend>Contact Info</legend>
                <Row>
                  <Column large='6'>
                    <label className='required'>
                      Name
                      <sup>
                        <span>*</span>
                        (required)
                      </sup>
                      <input autoComplete='name' name='name' placeholder='Enter your first and last name' required type='text' />
                      <small className='error'>A name is required.</small>
                    </label>
                  </Column>
                  <Column large='6'>
                    <label className='required'>
                      Email
                      <sup>
                        <span>*</span>
                        (required)
                      </sup>
                      <input autoComplete='email' name='e-mail' placeholder='myemail@provider.com' required type='email' />
                      <small className='error'>A valid email address is required.</small>
                    </label>
                  </Column>
                </Row>
                <Row>
                  <Column large='6'>
                    <label>
                      State
                      <select id='state-selector' name='states' style={{width: 290}}>
                        <option></option>
                        <option value='AK'>Alaska</option>
                        <option value='AL'>Alabama</option>
                        <option value='AR'>Arkansas</option>
                        <option value='AZ'>Arizona</option>
                        <option value='CA'>California</option>
                        <option value='CO'>Colorado</option>
                        <option value='CT'>Connecticut</option>
                        <option value='DE'>Delaware</option>
                        <option value='FL'>Florida</option>
                        <option value='GA'>Georgia</option>
                        <option value='HI'>Hawaii</option>
                        <option value='IA'>Iowa</option>
                        <option value='ID'>Idaho</option>
                        <option value='IL'>Illinois</option>
                        <option value='IN'>Indiana</option>
                        <option value='KS'>Kansas</option>
                        <option value='KY'>Kentucky</option>
                        <option value='LA'>Louisiana</option>
                        <option value='MA'>Massachusetts</option>
                        <option value='MD'>Maryland</option>
                        <option value='ME'>Maine</option>
                        <option value='MI'>Michigan</option>
                        <option value='MN'>Minnesota</option>
                        <option value='MO'>Missouri</option>
                        <option value='MS'>Mississippi</option>
                        <option value='MT'>Montana</option>
                        <option value='NC'>North Carolina</option>
                        <option value='ND'>North Dakota</option>
                        <option value='NE'>Nebraska</option>
                        <option value='NH'>New Hampshire</option>
                        <option value='NJ'>New Jersey</option>
                        <option value='NM'>New Mexico</option>
                        <option value='NV'>Nevada</option>
                        <option value='NY'>New York</option>
                        <option value='OH'>Ohio</option>
                        <option value='OK'>Oklahoma</option>
                        <option value='OR'>Oregon</option>
                        <option value='PA'>Pennsylvania</option>
                        <option value='RI'>Rhode Island</option>
                        <option value='SC'>South Carolina</option>
                        <option value='SD'>South Dakota</option>
                        <option value='TN'>Tennessee</option>
                        <option value='TX'>Texas</option>
                        <option value='UT'>Utah</option>
                        <option value='VA'>Virginia</option>
                        <option value='VT'>Vermont</option>
                        <option value='WA'>Washington</option>
                        <option value='WI'>Wisconsin</option>
                        <option value='WV'>West Virginia</option>
                        <option value='WY'>Wyoming</option>
                      </select>
                    </label>
                  </Column>
                  <Column large='6'>
                    <label>
                      Phone
                      <input autoComplete='tel' name='phone' placeholder='###-###-####' type='tel' />
                    </label>
                  </Column>
                </Row>
              </fieldset>
              <Row>
                <Column large='12'>
                  <label>
                    Comments
                    <textarea cols='30' name='comments' placeholder='Enter any additional thoughts or questions...' rows='10'></textarea>
                  </label>
                </Column>
              </Row>
              <button className='button large radius' type='submit'>
                <span className='text'>
                  Submit your Question
                </span>
                <div className='loading' style={{display: 'none'}}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </form>
          </div>
          <div className='content' id='directions'>
            <h2>Location & Directions</h2>
            <iframe frameBorder='0' height='300' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCn_uuOjIL2aBi9Z2xIqxqVPUnuamP2lbM&amp;q=Gale+Diamonds+Chicago,Chicago+IL&amp;center=41.882336,-87.626001' style={{border: 0, width: '100%'}} width='500'></iframe>
          </div>
        </div>
      </Column>
    );
  }
});

const ContactSidebar = React.createClass({
  render() {
    return (
      <Column large='4'>
        <h3>Contact Info</h3>
        <hr />
        <section>
          <div itemScope itemType='http://schema.org/JewelryStore'>
            <h3 itemProp='name'>Gale Diamonds Chicago</h3>
            <p itemProp='description'>
              Fine custom jewelry, engagement rings, and anything else your heart desires
            </p>
            <h4>We are located at:</h4>
            <ul className='vcard' itemProp='address' itemScope itemType='http://schema.org/PostalAddress'>
              <li className='street-address' itemProp='streetAddress'>
                5 N Wabash Ave Apt 403
              </li>
              <li className='locality' itemProp='addressLocality'>
                Chicago
              </li>
              <li>
                <span className='state' itemProp='addressRegion'>
                  Illinois
                </span>
                ,
                <span className='zip' itemProp='postalCode'>
                  60602
                </span>
              </li>
            </ul>
            <h4>Hours of operation:</h4>
            <p>
              <time dateTime='Mo-Fr 10:00-18:00' itemProp='openingHours'>
                Monday - Friday 10am-6pm
                <br />
                By appointment only
                <br />
                Weekend Hours Available
              </time>
            </p>
            <h4>How to get in touch:</h4>
            <p>
              <span content='+13129200075' itemProp='telephone'>
                Give us a call:
                <br />
                <a href='tel:+1-312-920-0075'>312-920-0075</a>
              </span>
              <br />
              <span content='sales@galediamonds.com' itemProp='email'>
                Send us an email:
                <br />
                <a href='mailto:sales@galediamonds.com'>sales@galediamonds.com</a>
              </span>
            </p>
          </div>
        </section>
      </Column>
    );
  }
});

const Contact = React.createClass({
  render() {
    return (
      <div className='row'>
        <ContactContent />
        <ContactSidebar />
      </div>
    );
  }
});

export default Contact;

import React from 'react';
import {Budget, CaratWeight, Comments, ContactInfo, DiamondClarity, DiamondColor, Email, Name, Phone, Quality, ShapeSelector, State} from '../components/forms/All';

const DiamondQuote = React.createClass({
  componentDidMount() {
    $(document).foundation('magellan', 'reflow');
  },
  render() {
    return (
      <div>
        <div className='row'>
          <div className='large-12 columns'>
            <h1>Get a Diamond Quote</h1>
            <p>
              Enter as much information as possible to allow us to assist you.
            </p>
            <p>
              The only required information is your name and email, but entering a phone number will allow us to better discuss your needs.
            </p>
            <h3 className='show-for-small-only'>The table of contents below will help you navigate the form.</h3>
          </div>
        </div>
        <div className='row show-for-small-only'>
          <div className='small-12 large-8 large-centered columns'>
            <div data-magellan-expedition='fixed'>
              <dl className='sub-nav'>
                <dd data-magellan-arrival='shape'>
                  <a href='#shape'>Shape</a>
                </dd>
                <dd data-magellan-arrival='size-budget'>
                  <a href='#size-budget'>Size/Budget</a>
                </dd>
                <dd data-magellan-arrival='quality'>
                  <a href='#quality'>Quality</a>
                </dd>
                <dd data-magellan-arrival='contact'>
                  <a href='#contact'>Contact Info</a>
                </dd>
                <dd data-magellan-arrival='comments'>
                  <a href='#comments'>Comments</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='large-12 columns'>
            <div className='results' data-results-for='diamond-request'>
              <div className='template alert-box radius' data-alert style={{display: 'none'}}>
                <h4 className='results-text' style={{color: 'white'}}></h4>
                <a className='close' href='#'>&times;</a>
              </div>
            </div>
            <form action='/diamonds/quote/' data-abide='ajax' id='diamond-request' method='post'>
              <div className='row'>
                <div className='small-8 medium-4 small-centered medium-uncentered columns'>
                  <a data-magellan-destination='shape' name='shape'></a>
                  <ShapeSelector />
                </div>
                <div className='medium-8 columns'>
                  <div className='row'>
                    <div className='large-10 large-centered columns'>
                      <div className='row'>
                        <div className='x-small-12 small-6 columns'>
                          <a data-magellan-destination='size-budget' name='size-budget'></a>
                          <CaratWeight />
                        </div>
                        <div className='x-small-12 small-6 columns'>
                          <Budget />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='small-6 medium-4 columns'>
                      <a data-magellan-destination='quality' name='quality'></a>
                      <DiamondColor />
                    </div>
                    <div className='small-6 medium-4 columns'>
                      <DiamondClarity />
                    </div>
                    <div className='medium-4 columns'>
                      <Quality label='Cut' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='large-8 large-centered columns'>
                  <a data-magellan-destination='contact' name='contact'></a>
                  <ContactInfo />
                  <div className='row'>
                    <div className='large-12 columns'>
                      <a data-magellan-destination='comments' name='comments'></a>
                      <Comments />
                    </div>
                  </div>
                </div>
              </div>
              <button className='button large radius' type='submit'>
                <span className='text'>
                  Request a Quote
                </span>
                <div className='loading' style={{display: 'none'}}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default DiamondQuote;

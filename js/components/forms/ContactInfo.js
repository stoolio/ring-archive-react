import React from 'react';
import Name from './Name';
import Email from './Email';
import State from './State';
import Phone from './Phone';

const ContactInfo = React.createClass({
  render() {
    return (
      <fieldset>
        <legend>Contact Info</legend>
        <div className='row'>
          <div className='large-6 columns'>
            <Name />
          </div>
          <div className='large-6 columns'>
            <Email />
          </div>
        </div>
        <div className='row'>
          <div className='large-6 columns'>
            <State />
          </div>
          <div className='large-6 columns'>
            <Phone />
          </div>
        </div>
      </fieldset>
    );
  }
});

export default ContactInfo;

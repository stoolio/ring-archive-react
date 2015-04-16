import React from 'react';

const Email = React.createClass({
  render() {
    return (
      <label className='required'>
        Email
        <sup>
          <span>*</span>
          (required)
        </sup>
        <input autoComplete='email' name='e-mail' placeholder='myemail@provider.com' required type='email' />
        <small className='error'>A valid email address is required.</small>
      </label>
    );
  }
});

export default Email;

import React from 'react';

const Name = React.createClass({
  render() {
    return (
      <label className='required'>
        Name
        <sup>
          <span>*</span>
          (required)
        </sup>
        <input autoComplete='name' name='name' placeholder='Enter your first and last name' required type='text' />
        <small className='error'>A name is required.</small>
      </label>
    );
  }
});

export default Name;

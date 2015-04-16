import React from 'react';

const Phone = React.createClass({
  render() {
    return (
      <label>
        Phone
        <input autoComplete='tel' name='phone' placeholder='###-###-####' type='tel' />
      </label>
    );
  }
});

export default Phone;

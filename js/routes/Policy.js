import React from 'react';

const Policy = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    let policy = this.context.router.getCurrentParams().policy || 'Policy List';
    return (
      <div className='row'>
        <div className='large-12 columns'>
          {policy}
        </div>
      </div>
    );
  }
});

export default Policy;

import React from 'react';

const EngagementRing = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    return (
      <h1>{this.context.router.getCurrentParams().sku}</h1>
    );
  }
});

export default EngagementRing;

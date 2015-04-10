import React from 'react';

const Column = React.createClass({
  getInitialState() {
    return {
      large: '12',
      medium: '',
      small: ''
    };
  },

  componentWillMount() {
    this.updateProps(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this.updateProps(nextProps);
  },

  updateProps(props) {
    this.setState({
      large: props.large || this.state.large,
      medium: props.medium || this.state.medium,
      small: props.small || this.state.small
    });
  },

  makeClass(size, num) {
    if(num === '') {
      return '';
    }
    return `${size}-${num}`;
  },

  render() {
    var classes = [];

    for(var i in this.state) {
      var theClass = this.makeClass(i, this.state[i]);
      if(theClass !== '') {
        classes.push(theClass);
      }
    }

    classes.push('columns');

    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }

});

export default Column;

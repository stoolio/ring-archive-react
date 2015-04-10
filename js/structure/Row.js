import React from 'react';

const Row = React.createClass({
  getInitialState() {
    return {
      classes: ''
    };
  },

  componentWillMount() {
    this.setClasses(this.props.classes);
  },

  componentWillReceiveProps(nextProps) {
    this.setClasses(nextProps.classes);
  },

  setClasses(classes) {
    if(classes === undefined) {
      return;
    }
    this.setState({
      classes
    });
  },

  render() {
    let classes = this.state.classes === '' ? 'row' : this.state.classes + ' row';
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

});

export default Row;

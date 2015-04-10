import React from 'react';

const PageList = React.createClass({
  render() {
    var pages = [],
        cx = React.addons.classSet,
        classes;
    for(var i = 0; i < this.props.totalPages; i++) {
      pages.push((function(){}(

      )) (
        <li className={cx({
          'current': this.props.currentPage === i
        })}>{i}<li>
      ));
    }

    return (
      <ul className='pagination'>
        {pages}
      </ul>
    );
  }
});

export default PageList;

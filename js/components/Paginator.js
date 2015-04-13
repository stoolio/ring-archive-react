import React from 'react';
import 'react/addons';

var cx = React.addons.classSet;

const Paginator = React.createClass({
  pageArray() {
    return Array.apply(0, Array(this.props.totalPages))
            .map(function(_, b) { return b + 1; } );
  },

  render() {
    let currentPage = this.props.currentPage;
    let handleClick = this.props.handleClick;
    let pageLinks = this.pageArray().map(function(i) {
      return (
        <li key={i} className={cx({current: currentPage === i})}>
          <a href='#' onClick={handleClick} data-page={i}>
            {i}
          </a>
        </li>
      );
    });
    return (
      <ul className='pagination'>
        <li key='prev' className={cx({unavailable: currentPage === 1}, 'arrow')}>
          <a href='#' onClick={handleClick} data-page={currentPage - 1}>&laquo;</a>
        </li>
        {pageLinks}
        <li key='next' className={cx({unavailable: currentPage === this.props.totalPages}, 'arrow')}>
          <a href='#' onClick={handleClick} data-page={currentPage + 1}>&raquo;</a>
        </li>
      </ul>
    );
  }

});

export default Paginator;

import React from 'react';

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
        <li key={'page' + i} className={currentPage === i ? 'current' : ''}>
          <a href='#' onClick={handleClick}>
            {i}
          </a>
        </li>
      );
    });
    return (
      <ul className='pagination'>
        {pageLinks}
      </ul>
    );
  }

});

export default Paginator;

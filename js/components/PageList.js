import React from 'react';

const PageList = React.createClass({
  render() {
    var pages = [];
    var cx = React.addons.classSet;
    for(var i = 0; i < this.props.totalPages; i++) {
      pages.push(i);
    }
    var class;
    pages.map(function(i) {
      class = cx({current: (this.props.currentPage === i)});
      return (
        <li className={class}>{i}<li>
      );
    })

    return (
      <ul className="pagination">
        {pages}
      </ul>
    );
  }
});

export default PageList;

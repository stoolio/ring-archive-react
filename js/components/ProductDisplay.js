import React from 'react';

import {Row, Column} from '../structure/All';

import ProductList from './ProductList';
import Paginator from './Paginator';
import Sorter from './Sorter';
import PerPageSelect from './PerPageSelect';

const ProductDisplay = React.createClass({
  getInitialState() {
    return {
      page: 1,
      currentSort: false,
      perPage: 6
    };
  },

  totalPages() {
    return Math.ceil(this.props.data.length / this.state.perPage);
  },

  pageChange(e) {
    let page = Number(e.target.innerText);
    this.setState({
      page: page
    });
    e.preventDefault();
  },

  handleSort(e) {
    let text = e.target.innerText;
    console.log(text);
    var sort = text.toLowerCase();
    console.log(sort);
    if(this.state.currentSort === sort) {
      this.setSort(false);
    } else {
      this.setSort(sort);
    }
  },

  setSort(sort) {
    this.setState({
      currentSort: sort
    });
  },

  doSort(products) {
    console.log('sorting: ' + this.state.currentSort.toString());
    if(this.state.currentSort) {
      products = products.sort(function(a, b) {
        return b.price - a.price;
      });

      if(this.state.currentSort === 'lowest') {
        products = products.reverse();
      }
    }
    return products;
  },

  setPerPage(e) {
    let perPage = Number(e.target.value);
    this.setState({
      perPage
    });
  },

  render() {
    let offset = this.state.perPage * (this.state.page - 1);
    let products = this.doSort(this.props.data).slice(offset, offset + this.state.perPage);

    return (
      <div id='product-list'>
        <Row>
          <Column large='6'>
            <Sorter handleSort={this.handleSort} />
          </Column>
          <Column large='6'>
            <PerPageSelect perPage={this.state.perPage} handleSelect={this.setPerPage} />
          </Column>
        </Row>
        <Row>
          <Column>
            <ProductList products={products} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Paginator currentPage={this.state.page} totalPages={this.totalPages()} handleClick={this.pageChange} />
          </Column>
        </Row>
      </div>
    );
  }
});

export default ProductDisplay;

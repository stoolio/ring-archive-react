import React from 'react';
import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';

import {Row, Column, FullRow} from '../structure/All';

import ProductList from './ProductList';
import Paginator from './Paginator';
import Sorter from './Sorter';
import Select from './Select';

const ProductDisplay = React.createClass({
  getInitialState() {
    return {
      page: 1,
      currentSort: false,
      perPage: 6,
      perRow: 3
    };
  },

  totalPages() {
    return Math.ceil(this.props.data.length / this.state.perPage);
  },

  pageChange(e) {
    e.preventDefault();
    let page = Number(e.target.dataset.page);
    if(page < 1 || page > this.totalPages()) {
      return;
    }
    this.setState({
      page
    });
  },

  handleSort(e) {
    let text = e.target.innerText;
    var sort = text.toLowerCase();
    if(this.state.currentSort === sort) {
      this.setSort(false);
    } else {
      this.setSort(sort);
    }
  },

  setSort(sort) {
    setTimeout(function() {

    });
    this.setState({
      currentSort: sort
    });
  },

  doSort(products) {
    products = products.slice();
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

  setPerRow(e) {
    let perRow = Number(e.target.value);
    this.setState({
      perRow
    });
  },

  render() {
    let offset = this.state.perPage * (this.state.page - 1);
    let products = this.state.page ? this.doSort(this.props.data).slice(offset, offset + this.state.perPage) : [];

    return (
      <div id='product-list'>
        <Row>
          <Column large='4'>
            <Sorter perPage={this.state.perPage} handleSort={this.handleSort} />
          </Column>
          <Column large='4'>
            <Select label='Items per Row' options={[1, 2, 3, 4, 5, 6]} value={this.state.perRow} handleSelect={this.setPerRow} />
          </Column>
          <Column large='4'>
            <Select label='Items Per Page' options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} value={this.state.perPage} handleSelect={this.setPerPage} />
          </Column>
        </Row>
        <FullRow>
          <Paginator currentPage={this.state.page} totalPages={this.totalPages()} handleClick={this.pageChange} />
        </FullRow>
        <FullRow>
          <ProductList perRow={this.state.perRow} ref='productList' products={products} />
        </FullRow>
      </div>
    );
  }
});

export default ProductDisplay;

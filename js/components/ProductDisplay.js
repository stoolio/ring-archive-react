import React from 'react';

import {Row, Column, FullRow} from '../structure/All';

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
    var self = this;
    var page = Number(e.target.innerText);
    this.setState({
      page: false
    });
    setTimeout(function() {
      self.setState({
        page
      });
    }, 500);
    e.preventDefault();
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

  render() {
    let offset = this.state.perPage * (this.state.page - 1);
    let products = this.state.page ? this.doSort(this.props.data).slice(offset, offset + this.state.perPage) : [];

    return (
      <div id='product-list'>
        <Row>
          <Column large='6'>
            <Sorter perPage={this.state.perPage} handleSort={this.handleSort} />
          </Column>
          <Column large='6'>
            <PerPageSelect perPage={this.state.perPage} handleSelect={this.setPerPage} />
          </Column>
        </Row>
        <FullRow>
          <ProductList products={products} />
        </FullRow>
        <FullRow>
          <Paginator currentPage={this.state.page} totalPages={this.totalPages()} handleClick={this.pageChange} />
        </FullRow>
      </div>
    );
  }
});

export default ProductDisplay;

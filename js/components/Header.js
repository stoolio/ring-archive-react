import React from 'react';
import {Column} from '../structure/';
import Menu from './Menu';
import Breadcrumbs from './Breadcrumbs';

const Header = React.createClass({
  render() {
    return (
      <header className='row header'>
        <Column medium='6'>
          <h1 style={{fontSize: '2rem'}}>Gale Diamonds Chicago</h1>
          <p>Chicago's Diamond Experts</p>
        </Column>
        <Column medium='6'>
          <p className='text-center' style={{marginBottom: '0.7rem'}}>
            Email Us: <a href='mailto:sales@galediamonds.com'>sales@galediamonds.com</a>
            <br />
            Call Us: <a href='tel:+1-312-920-0075'>312-920-0075</a>
          </p>
        </Column>
        <Menu />
        <Breadcrumbs />
      </header>
    );
  }

});

export default Header;

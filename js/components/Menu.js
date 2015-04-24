import React from 'react';
import {Row, Column} from '../structure/';
import {Link} from 'react-router';

import 'react/addons';

let cx = React.addons.classSet;

const MenuLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount() {
    $(document).foundation('topbar', 'reflow');
  },
  render() {
    let title = this.props.title || this.props.to.split('-').map(word => {
      return word[0].toUpperCase() + word.substr(1);
    }).join(' ');
    let { router } = this.context;
    let isActive = router.isActive(this.props.to, this.props.params, this.props.query);
    let classes = cx({
      active: isActive,
      'has-dropdown': typeof this.props.children !== 'undefined'
    });
    return (
      <li className={classes}>
        <Link to={this.props.to}>{title}</Link>
        {this.props.children}
      </li>
    );
  }
});

const Menu = React.createClass({
  render() {
    return (
      <Row className='menu'>
        <Column large='12'>
          <nav className='top-bar' data-topbar='true'>
            <ul className='title-area'>
              <li className='name'>Navigation</li>
              <li className='toggle-topbar menu-icon'>
                <a to='#'><span>Menu</span></a>
              </li>
            </ul>
            <section className='top-bar-section'>
              <ul className='right'>
                <MenuLink to='home' />
                <MenuLink to='engagement-rings' />
                <MenuLink to='diamonds'>
                  <ul className='dropdown'>
                    <li>
                      <Link to='diamonds/quote'>
                        Request a Quote
                      </Link>
                    </li>
                  </ul>
                </MenuLink>
                <MenuLink to='about' />
                <MenuLink to='contact' />
              </ul>
            </section>
          </nav>
        </Column>
      </Row>
    );
  }

});

// <MenuLink to='home' />
// <MenuLink to='engagement-rings' />
// <MenuLink to='diamonds' />

// <li>
//   <Link to='specials'>
//     Specials
//   </Link>
// </li>
// <li>
//   <Link to='blog'>
//     Blog
//   </Link>
// </li>
// <li>
//   <Link to='contact'>
//     Contact
//   </Link>
// </li>

export default Menu;

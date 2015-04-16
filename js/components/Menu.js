import React from 'react';
import {Row, Column} from '../structure/All';
import {Link} from 'react-router';

const Menu = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    let router = this.context.router;
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
                <li className={router.getCurrentPathname() === '/' ? 'active' : ''}>
                  <Link to='/'>
                    Home
                  </Link>
                </li>
                <li className={router.getCurrentPathname() === '/engagement-rings' ? 'active' : ''}>
                  <Link to='engagement-rings'>
                    Engagement Rings
                  </Link>
                </li>
                {
                // <li>
                //   <Link to='diamonds'>
                //     Diamonds
                //   </Link>
                // </li>
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
                //   <Link to='Linkbout'>
                //     About
                //   </Link>
                // </li>
                // <li>
                //   <Link to='contact'>
                //     Contact
                //   </Link>
                // </li>
              }
              </ul>
            </section>
          </nav>
        </Column>
      </Row>
    );
  }

});

export default Menu;

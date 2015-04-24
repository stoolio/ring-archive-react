import React from 'react';
import {Row, Column} from '../structure/';
import {Link} from 'react-router';

const Breadcrumbs = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    let router = this.context.router;

    let path = router.getCurrentPathname().split('/');

    if(path[1] === '') {
      path.shift();
    }
    path[0] = 'home';

    // let crumbs = path.map(path => {
    //   var name, nicename;
    //   if(path === '') {
    //     console.log('do i see this!!!!!!!!!!!!!!!');
    //     name = router.makePath('home');
    //     nicename = 'Home';
    //   } else {
    //     name = router.makePath(path);
    //     nicename = path.split('-').map(part => {
    //       return part[0].toUpperCase() + part.substr(1);
    //     }).join(' ');
    //   }
    //   if(router.isActive(name)) {
    //     return (
    //       <a className='current' href={name}>{nicename}</a>
    //     );
    //   } else {
    //     return (
    //       <a href={name}>{nicename}</a>
    //     );
    //   }
    // });

    return (
      <Row className='breadcrumbs'>
        <Column large='12'>
          <nav className='breadcrumbs'>
            <Link to='home'>Home</Link>
          </nav>
        </Column>
      </Row>
    );
  }

});

export default Breadcrumbs;

import React, { Fragment } from 'react';

function Navbar() {
  return (
    <Fragment>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='http://localhost:3000/'>
            Navbar
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <div className='shadow-sm bg-white rounded'>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/api'>
                  API
                </Link>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
              <button className='btn btn-outline-primary' type='submit'>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

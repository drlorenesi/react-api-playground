import React from 'react';
import { Link } from 'react-router-dom';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navigation(props) {
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
                <Link className='nav-link' to='/movies'>
                  Movies
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/api'>
                  API
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/counters'>
                  Counters
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/charts'>
                  Charts
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/data-table'>
                  Data Table
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/material-table'>
                  Material Table
                </Link>
              </li>
            </ul>

            <ul className='navbar-nav ml-auto'>
              <button className='btn  mr-2' type='submit'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='badge rounded-pill bg-secondary ml-1'>
                  {props.items}
                </span>
              </button>
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

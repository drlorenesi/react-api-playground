import React from 'react';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='main-footer container-fluid'>
      <div className='container-fluid'>
        <div className='row text-center'>
          <p>
            &copy; {new Date().getFullYear()} COMPANY | and some other legal
            stuff.
          </p>
          <p>
            <a
              href='https://github.com/drlorenesi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

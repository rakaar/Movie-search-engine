import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CommonNav.scss';

export default function CommonNav() {
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div class='navbar-brand'>
          <Link to='/'>
            {' '}
            <h2 className='headings'> KYC </h2>
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            {localStorage.getItem('userkyc') != undefined ? (
              <div className='button is-success'>
                <h3 className='headings'>{localStorage.getItem('userkyc')}</h3>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='navbar-item'>
            {/* <Link to='/'>
              <div className='button is-info'>
                <h3 className='headings'>Register</h3>
              </div>
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

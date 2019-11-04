import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EVM/EVM.scss';

export default function IndivOption(props) {
  return (
    <div>
      <div className='panel-block'>
        <Link to={`/candidate/${props.name}`}>
          {' '}
          <h2>{props.name}</h2>
        </Link>

        <h2>{props.party}</h2>
        <a className='button is-danger is-rounded is-medium is-fullWidth'>
          VOTE
        </a>
      </div>
    </div>
  );
}

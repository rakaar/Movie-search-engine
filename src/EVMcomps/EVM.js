import React from 'react';
import IndivOption from './IndivOption';
import CommonNav from '../CommonNav';
import '../styles/EVM/EVM.scss';

const Options = [
  { Name: 'Cand-1', Party: 'Party-1' },
  { Name: 'Cand-2', Party: 'Party-2' },
  { Name: 'Cand-3', Party: 'Party-3' },
  { Name: 'Cand-4', Party: 'Party-4' },
  { Name: 'Cand-5', Party: 'Party-6' },
  { Name: 'Cand-6', Party: 'Party-17' }
];

export default function EVM(props) {
  return (
    <div>
      <CommonNav />
      <nav className='panel'>
        <h1>
          <u>{props.match.params.id} Constituency</u>
        </h1>
        {Options.map(item => (
          <IndivOption name={item.Name} party={item.Party} />
        ))}
      </nav>
    </div>
  );
}

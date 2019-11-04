import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage/HomePage.scss';

export default function HomePage() {
  return (
    <div>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>VoDAPP</h1>
          <h2 className='subtitle'>A Decentralized Voting Application</h2>
          <a class='button is-success is-fullwidth'>Create an Account</a>
          <br />
          <Link to='/login'>
            <a class='button is-warning is-fullwidth'>Sign In</a>
          </Link>
        </div>
      </div>
      <div className='container'>
        <h2>What is "VoDAPP" ?</h2>
        <h3>
          VoDAPP is fully Decentralized voting platform. Here you can register
          and vote in the elections of your constituency from any part of the
          world
        </h3>
        <h2>How do I create an Account ?</h2>
        <h3>
          You can use your UPDATED Passport or UPDATED Aadhar Card and apply for
          the Voter ID by clicking on the <strong>Create Account</strong> above.
        </h3>
        <h2>What's more here ?</h2>
        <h3>
          VoDAPP also helps you to choose a better candidate with a portal where
          it contains information of each candidate.
        </h3>
      </div>
    </div>
  );
}

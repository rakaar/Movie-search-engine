import React from 'react';
import Manifesto from './Manifesto';
import Intro from './Intro';
import Attendance from './attendance';
import Promises from './Promises';
import CommonNav from '../CommonNav';

export default function Board(props) {
  return (
    <div>
      <CommonNav />
      <Intro name={props.match.params.id} />
      <h1>
        <u>Manifesto</u>
      </h1>
      <Manifesto />
      <h1>
        <u>Attendance</u>
      </h1>
      <Attendance />
      <h1>
        <u>Record of Promises</u>
      </h1>
      <Promises />
    </div>
  );
}

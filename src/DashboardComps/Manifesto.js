import React from 'react';

import '../styles/Dashboard/Manifesto.scss';

const Manifestos = [
  {
    title: 'Cancel Illu ',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Cancel OP ',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Cancel Alu ',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
];

export default function Manifesto() {
  return (
    <div>
      {Manifestos.map(item => {
        return (
          <article class='message is-info'>
            <div class='message-header'>
              <p>{item.title}</p>
            </div>
            <div class='message-body'>{item.description}</div>
          </article>
        );
      })}
    </div>
  );
}

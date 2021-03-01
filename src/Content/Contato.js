import React from 'react';

import { Wrapper } from './styles.jsx';

export const Contato = () => (
  <Wrapper>
    <div className="secondary">
      <ul>

        <li >
          <div >
            <a href="https://www.linkedin.com/in/bruno-de-oliveira-pereira-4238aab5/" target="_blank">
              <h4 > Linkedin </h4>
            </a>
          </div>
        </li>

        <li >
          <div>
            <a href="https://github.com/brunoDevGit" target="_blank">
              <h4 > GitHub </h4>
            </a>
          </div>
        </li>

        <li >
          <div>
            <a href="mailto:brunodoliveirapereira@gmail.com" target="_blank">
              <h4 > Email </h4>
            </a>
          </div>
        </li>

      </ul>
    </div>

  </Wrapper>
);

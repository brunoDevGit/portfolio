import React from 'react';

import { Wrapper } from './styles.jsx';

export const Contato = () => (
  <Wrapper>
     <ul className="primary">
      
     <li>
        <div >
        <a href="https://www.linkedin.com/in/bruno-de-oliveira-pereira-4238aab5/" target="_blank">
        <h3 className="contato"> Linkedin </h3>
        
        </a>
        </div>
      </li>

      <li>
        <div>
        <a href="https://github.com/brunoDevGit" target="_blank">
        <h3 className="contato"> GitHub </h3>
        </a>
        </div>
      </li>
      
      <li>
        <div>
        <a href="mailto:brunodoliveirapereira@gmail.com" target="_blank">
        <h3 className="contato"> Email </h3>
        </a>
        </div>
      </li>

      

      
    </ul>

  </Wrapper>
);

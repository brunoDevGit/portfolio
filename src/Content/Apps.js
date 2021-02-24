import React from 'react';

import { Wrapper } from './styles.jsx';

export const Apps = () => (
  <Wrapper>
    <ul className="secondary">
      
      <li>
        <div >
        <a href="https://play.google.com/store/apps/details?id=com.brnApps.vainafeira"target="_blank">
        <h3>Vai na Feira ?</h3>
        <p>Uma aplicação de compras intuitiva desenvolvido em React Native</p>
        
        </a>
        </div>
      </li>

      <li>
        <div>
        <a href="https://play.google.com/store/apps/details?id=com.dbnScriptGame.FlyInSpace"target="_blank">
        <h3>Fly in Space</h3>
        <p>Game para smartfone desenvolvido em C# na Unity3D </p>
        
        </a>
        </div>
      </li>
      
      <li>
        <div>
        <a href="https://play.google.com/store/apps/details?id=com.brnApps.campoMinado"target="_blank">
        <h3>Campo Minado</h3>
        <p>Game para smartfone desenvolvido em React Native </p>
        
        </a>
        </div>
      </li>

      <li>
        <div>
        <a href="https://play.google.com/store/apps/details?id=com.brnApps.calculator"target="_blank">
        <h3>Calculadora Simples</h3>
        <p>desenvolvido em React Native</p>
        </a>
        </div>
      </li>
    </ul>

  </Wrapper>
);

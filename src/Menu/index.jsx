import React from 'react';

import { Container, DropdownStyles } from './styles';
import {DropdownOption, DropdownProvider, DropdownRoot,} from '../Dropdown'
import {Apps, FrontendNoAr,Repositorios, Contato} from '../Content'


function Menu() {
  return (
    <DropdownProvider>
    <DropdownStyles>
    <Container>

      <ul>
      <li>
          <DropdownOption
          name="Repositórios"
          content={Repositorios}
          backgroundHeight={0}/>
        </li>
        <li>
          <DropdownOption 
          name="Apps"
          content={Apps} 
          backgroundHeight={0}/>
        </li>
        <li>
          <DropdownOption
          name="Frontends no Ar"
          content={FrontendNoAr}
          backgroundHeight={0}/>
        </li>
        
        <li>
          <DropdownOption
          name="Contato"
          content={Contato}
          backgroundHeight={0}/>
        </li>
      </ul>
    </Container>
    <DropdownRoot/>
    </DropdownStyles>
    </DropdownProvider>
  );
}

export default Menu;
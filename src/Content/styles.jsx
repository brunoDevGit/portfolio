import styled, { css } from 'styled-components';

const h4 = css`
  font-size: 16px;
  margin-left:10px;
  color:  #e4e3e3;
`;

const p = css`
  color:  #cacaca;;
  font-size: 12px;
`;

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 1.9;
  }
`;

export const Wrapper = styled.div`
  padding: 32px 35px;
  white-space: nowrap;
  

  .primary {
    display: flex;
    li {
        padding: 7px;
        background: linear-gradient(150deg,  #E50914 ,#181414 50%);
      ${hover}
      
      cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
  }
 
  
  a {
          text-decoration: none;
        }
     

      & + li {
        margin-top: 10px;
        
      }
      h1{
        ${p}
        padding-top: 5px;
      }

      h4 {
        ${h4}
        
       
      }
      h3 {
        ${h4}
      }
      p {
        ${p}
        padding-top: 5px;
       
        
      }
      
  
  }}

  
    .secondary {
    
      display: flex;
    li {
        padding: 7px;
        background: linear-gradient(150deg,  #0961e5 ,#181414 70%);
      ${hover}
      
      cursor: pointer;
  transition: opacity 0.1s ease-in;
  
  &:hover {
    opacity: 0.7;
  }
 
  div {
    padding: 0px 5px;
    margin: 0px;
  }
  a {
          text-decoration: none;
        }
     

      & + li {
        margin-top: 10px;
        
      }
      h1{
        ${p}
        padding-top: 5px;
      }

      h3 {
        ${h4}
      }

      h4 {
        ${h4}
        
       
      }
      p {
        ${p}
        padding-top: 5px;
       
        
      }

      
  
  }}

`;

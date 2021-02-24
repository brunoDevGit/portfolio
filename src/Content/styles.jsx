import styled, { css } from 'styled-components';

const h3 = css`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color:  #fff;;
`;
const h4 = css`
  font-size: 16px;
  margin-left:10px;
  color:  #e4e3e3;;
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

      h4 {
        ${h4}
        
       
      }
      p {
        ${p}
        padding-top: 5px;
       
        
      }
      
  
  }}

  
    .secondary {
    

    li {
      padding: 7px;
       box-shadow: 4px -1px 10px -1px #838383;
      ${hover}
      display: flex;
      cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
    
  }
  a {
          text-decoration: none;
        }
     

      & + li {
        margin-top: 14px;
      }

      h3 {
        ${h3}
        
        margin-left: 16px;
      }
      p {
        ${p}
        padding-top: 10px;
        margin-left: 14px;
      }

      
    }
    .contato {
      padding: 12px;
      
      box-shadow: 4px -1px 10px -1px #0e76a8;
    }
    }
  

`;

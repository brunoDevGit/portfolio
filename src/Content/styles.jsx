import styled, { css } from 'styled-components';

const h3 = css`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #32325d;
`;

const p = css`
  color: #6b7c93;
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
    
    li {
      display: flex;
      align-items: center;
      border-radius: 2px;
      

      
      
      
      
      &:hover,
        &:focus {
            
            box-shadow: 1px 1px 3px 3px #545353;
        }

      div {
        ${hover}
        margin-left: 19px;
        
        .contato {
          
          color: #fff;
          
          font-family: sans-serif;
          font-size: 14px;
          padding: 5px 5px;
          
          
    
        }

        h3 {
          ${h3}
          color: #fff;
          margin-top: 6px;
        }
        p {
          ${p}
          margin-top: 10px;
          color: #cacaca;
          margin-right: 8px  ;
          
        }
        a {
          text-decoration: none;
        }
      }

      & + li {
        margin-top: 32px;
      }

      
    }}
  
  
   
  

  

`;

export const Wrapper_M = styled.div`
 padding: 32px 35px;
  white-space: nowrap;
  

  .primary {
    
    li {
      display: flex;
      align-items: center;
      border-radius: 2px;
      

      
      
      
      
      &:hover,
        &:focus {
            
            box-shadow: 1px 1px 3px 3px #545353;
        }
          div{
            padding:5px 0px;
          }
    
        }

        h3 {
          ${h3}
          color: #fff;
          margin-top: 6px;
        }
        p {
          ${p}
          margin-top: 10px;
          color: #cacaca;
          margin-right: 8px  ;
          
        }
        a {
          text-decoration: none;
        }
      }

      & + li {
        margin-top: 32px;
      }

      
    
  
  
   
  

  

`;
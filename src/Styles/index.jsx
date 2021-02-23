import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    min-height: 100%;
    background: linear-gradient(180deg, #181414 85%, #630303 );
}
*, button, input {
    border: 0;
    background: none;
    font-family: sans-serif;
}
ul {
    list-style: none;
    padding-left: 0;
}

.textCenter {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
    
    color: #fff;
    font-size: 25px;
    font-family: sans-serif;

}         
.colorDev {
    color: #c20c0c;
    padding:10px 10px;
}   
            
.App {
  text-align: center;
}

.App-logo {
  height: 10vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 5s linear;
  }
}

.App-header {
  
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}


@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
   


`;
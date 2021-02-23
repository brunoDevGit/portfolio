
import React from 'react';
import logo from  './Img/logo192.png';
import Styles from './Styles';
import Layout from './Layout';
import Menu from './Menu'

function App() {
  return (
    <>
     <Layout>
     <Menu />
    <div className="App">
      <div className="App-header">
        <div className="textCenter">
          <h1>Frontend </h1>
          <h1 className="colorDev"> Developer </h1>
          <img src={logo} className="App-logo" alt="logo" />
          
        
        </div>
        
      </div>
    </div>
   
    </Layout>
    <Styles/>
    </>
  );
}

export default App;

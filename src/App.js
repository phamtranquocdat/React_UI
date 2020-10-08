import React from 'react';
import logo from './logo.svg';
import Contain from './component/Contain.js';
import Slidebar from './component/Slidebar.js'
import './App.css';

const Style = {
  //float: 'left',
  backgroundColor: '#ECF0F5',
  marginTop: '10px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',

  marginLeft: '20vw',
  marginRight: '20vw',
};

function App() {
  return (
    <div style={Style} className="App">
      <Contain></Contain>
      <Slidebar></Slidebar>
    </div>
  );
}

export default App;

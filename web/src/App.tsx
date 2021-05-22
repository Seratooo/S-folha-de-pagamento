import React from 'react';
import './App.css';
import Header from './componets/00_Header/Header';
import Corpo from './componets/01_Main/corpo';
import PaginaInicial from './componets/01.1_Cards';

function App() {
  return (
  <div>
    <Header/>
    <Corpo componente={PaginaInicial}/>
  </div>
  );
}

export default App;

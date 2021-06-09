import React from 'react';
import Header from '../components/00_Header/Header';
import Corpo from '../components/01_Main/corpo';
import PaginaInicial from '../components/01.1_Cards';

function PInicial() {
  return (
  <div>
    <Header/>
    <Corpo componente={PaginaInicial}/>
  </div>
  );
}

export default PInicial;
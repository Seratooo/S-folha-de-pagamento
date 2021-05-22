import React from 'react'
import Header from '../componets/00_Header/Header';
import Corpo from '../componets/01_Main/corpo';
import PaginaListarTrabalhador from '../componets/PaginaListarTrabalhador';

export default function Inserir() {

  return(
    <div>
      <Header/>
      <Corpo componente={PaginaListarTrabalhador}/>  
    </div>
  )
  
}
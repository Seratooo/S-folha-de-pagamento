import React from 'react'
import Header from '../components/00_Header/Header';
import Corpo from '../components/01_Main/corpo';
import PaginaAtualizar from '../components/PaginaAtualizar';

export default function Inserir() {

  return(
    <div>
      <Header/>
      <Corpo componente={PaginaAtualizar}/>  
    </div>
  )
  
}
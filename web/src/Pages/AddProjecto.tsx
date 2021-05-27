import React from 'react'
import Header from '../components/00_Header/Header';
import Corpo from '../components/01_Main/corpo';
import PaginaProjecto from '../components/PaginaInser_Projecto';

export default function Inserir() {

  return(
    <div>
      <Header/>
      <Corpo componente={PaginaProjecto}/>  
    </div>
  )
  
}
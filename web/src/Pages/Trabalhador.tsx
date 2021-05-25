import React from 'react'
import Header from '../components/00_Header/Header';
import Corpo from '../components/01_Main/corpo';
import PaginaTrabalhador from '../components/PaginaTrabalhador';

export default function Trabalhador() {

  return(
    <div>
      <Header/>
      <Corpo componente={PaginaTrabalhador}/>  
    </div>
  )
  
}
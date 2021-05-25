import React from 'react'
import Header from '../componets/00_Header/Header';
import Corpo from '../componets/01_Main/corpo';
import PaginaTrabalhador from '../componets/PaginaTrabalhador';

export default function Trabalhador() {

  return(
    <div>
      <Header/>
      <Corpo componente={PaginaTrabalhador}/>  
    </div>
  )
  
}
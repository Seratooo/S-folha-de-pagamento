import React from 'react'
import Header from '../componets/00_Header/Header';
import Corpo from '../componets/01_Main/corpo';
import PaginaProjecto from '../componets/PaginaProjecto';


export default function Trabalhador() {

  return(
    <div>
      <Header/>
      <Corpo componente={PaginaProjecto}/>  
    </div>
  )
  
}
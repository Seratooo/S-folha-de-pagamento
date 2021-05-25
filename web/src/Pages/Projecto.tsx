import React from 'react'
import Header from '../components/00_Header/Header';
import Corpo from '../components/01_Main/corpo';
import PaginaProjecto from '../components/PaginaProjecto';


export default function Trabalhador() {

  return(
    <div>
      <Header/>
      <Corpo componente={PaginaProjecto}/>  
    </div>
  )
  
}
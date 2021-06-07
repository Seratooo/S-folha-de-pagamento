import React from 'react'
import Header from '../components/00_Header/Header';
import Corpo from '../components/01_Main/corpo';
import ListRelated from '../components/PaginaListarTrabalhador/listRelated';


export default function TrabalhadorRelacionado() {

  return(
    <div>
      <Header/>
      <Corpo componente={ListRelated}/>  
    </div>
  )
  
}
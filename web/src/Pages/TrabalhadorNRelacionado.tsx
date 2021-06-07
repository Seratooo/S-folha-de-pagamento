import React from 'react'
import Header from '../components/00_Header/Header';
import Corpo from '../components/01_Main/corpo';
import ListNoRelated from '../components/PaginaListarTrabalhador/listNoRelated';

export default function TrabalhadorNoRelacionado() {

  return(
    <div>
      <Header/>
      <Corpo componente={ListNoRelated}/>  
    </div>
  )
  
}
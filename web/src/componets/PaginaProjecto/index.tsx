import React from 'react'
import './style.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

interface dados{
  nomeDoProjecto: string | '';
}
let data: dados;
export function dadosProjecto(dado:dados) {
  data = dado
}

export default function PaginaProjecto(){
    return(
      <div className="principalProjecto">
         <Link to="/show-projects">
          <div className="voltar">
        <FiArrowLeft style={{width:'35px'}}/> voltar
      </div></Link>
      
      <div className="contentProjecto">
      
      <h1>{data.nomeDoProjecto}</h1>
      <div className="Asides">
      <aside className="leftProject">
        <p><strong>Dados do Projecto</strong></p>
        <p>Projecto isso aquilo</p>
        <p>blabla projecto</p>
        <p>faz isso we e bla</p>
        <p>Intencao wee e wololo</p>
      </aside>
      <aside className="rightProjecto">
        <p><strong>Trabalhadores</strong></p>
        <p>Fulado de tal</p>
        <p>Fulana de Tal</p>
        <p>Minguito Mosquito</p>
      </aside>
      </div>
      <button>Atualizar dados do projecto</button>
      </div>
      </div>
    )
}
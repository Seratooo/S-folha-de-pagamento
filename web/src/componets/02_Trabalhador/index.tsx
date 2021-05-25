import React from 'react'
import { dadosTrabalhador } from '../PaginaTrabalhador'

import './style.css'

interface dados{
  imagem: any;
  nome: string;
  descricao: string;
}


export default function UmTrabalhador(props: dados){
  function clickiNoTrabalhador() {
    dadosTrabalhador(props);
  }

  return (
    <div className="contentMain" onClick={clickiNoTrabalhador}>
        <div className="contentImg">
              <img src={props.imagem} alt="Trabalhador 1" />
        </div>
        <div className="contentText">
          <h3>{props.nome}</h3>
          <p>{props.descricao}</p>
        </div>
    </div>
  )
}
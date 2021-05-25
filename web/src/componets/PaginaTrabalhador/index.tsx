import React from 'react'
import './style.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

interface dados{
  imagem: any | '';
  nome: string | '';
  descricao: string | '';
}
let data:dados;

export function dadosTrabalhador(dado:dados) {
  data  = dado;
}

export default function PaginaTrabalhador() {
 
  return(
    <div className="PrincipalTrabalhador">
  <Link to="/update"><div className="voltar">
        <FiArrowLeft style={{width:'35px'}}/> voltar
      </div></Link>

    <div className="contentTrabalhador">
            <div className="contentImgTrabalhador">
              <img src={data.imagem} alt="Imagem do trabalhador"/>
            </div>
            <div className="contentTextTrabalhador">
              <h1>Dados</h1>
              <p><strong>Nome: </strong> {data.nome}</p>
              <p><strong>Descrição: </strong> {data.descricao}</p>
            </div>
            
    </div>
    <button>Atualizar Dados</button>
    </div>
  )
}
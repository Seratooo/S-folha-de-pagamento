import React from 'react'
import Meusclientes from '../../assets/clientes.svg'
import { dadosProjecto } from '../PaginaProjecto'

interface dados{
  nomeDoProjecto: string;
}

export default function Projecto(props:dados) {
  
  function handleProject() {
    dadosProjecto(props)
  }

  return(
    
        <div className="Principal" style={{background:"#3EE9C0"}} onClick={handleProject}>
        <div className="title" style={{width:'20rem', height:'4rem'}}>
            <p>{props.nomeDoProjecto}</p>
        </div>
        <div className="qntd" style={{width:'20rem', height:'7rem'}}>
        <img src={Meusclientes} alt="trabalhadores recentes" style={{width:'6rem'}}/>
        </div>
        </div>
  )
}
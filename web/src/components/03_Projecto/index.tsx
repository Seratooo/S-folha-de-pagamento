import React from 'react'
import Meusclientes from '../../assets/clientes.svg'
import { dadosProjecto } from '../PaginaProjecto'

interface interfaceProjecto{
  id: number;
  name: string;
  client: string;
  project_cost: string;
  date_start: string;
  date_end: string;
  completion_percentage:number;
}
interface dados{
  nomeDoProjecto: interfaceProjecto;
}

export default function Projecto(props:dados) {
  
  function handleProject() {
    dadosProjecto(props)
  }

  return(
    
        <div className="Principal" style={{background:"#3EE9C0"}} onClick={handleProject}>
        <div className="title" style={{width:'20rem', height:'4rem'}}>
            <p key={props.nomeDoProjecto.id}>{props.nomeDoProjecto.name}</p>
        </div>
        <div className="qntd" style={{width:'20rem', height:'7rem'}}>
        <img src={Meusclientes} alt="trabalhadores recentes" style={{width:'6rem'}}/>
        </div>
        </div>
  )
}
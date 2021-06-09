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
    
        <div className="Principal" style={{background:"#3EE9C0"}} onClick={handleProject} key={props.nomeDoProjecto.id} >
        <div className="title" style={{width:'20rem', height:'4rem'}} key={props.nomeDoProjecto.id+1}>
            <p key={props.nomeDoProjecto.id}>{props.nomeDoProjecto.name}</p>
        </div>
        <div className="qntd" style={{width:'20rem', height:'8rem'}} key={props.nomeDoProjecto.id+2}>
        <img src={Meusclientes} alt="trabalhadores recentes" style={{width:'7rem'}}/>
        </div>
        </div>
  )
}
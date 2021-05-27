import React, { useEffect, useState } from 'react'
import './style.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import api from '../../services/api';

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
let data: dados;
export function dadosProjecto(dado:dados) {
  data = dado
}
interface relatedWorkData{
    name: string;
}

export default function PaginaProjecto(){
  const [relatedWorkers,setRelatedWorkers] = useState<relatedWorkData[]>([])
  
  const [norelatedWorkers,setNoRelatedWorkers] = useState<relatedWorkData[]>([])
  
  useEffect(()=>{
    api.get(`workers_related_by_project/${data.nomeDoProjecto.id}`).then(Response=>{
      setRelatedWorkers(Response.data)
    })
  },[])

  useEffect(()=>{
    api.get(`workers_norelated_by_project/${data.nomeDoProjecto.id}`).then(Response=>{
      setNoRelatedWorkers(Response.data)
    })
  },[])

    return(
      <div className="principalProjecto">
         <Link to="/show-projects">
          <div className="voltar">
        <FiArrowLeft style={{width:'35px'}}/> voltar
      </div></Link>
      
      <div className="contentProjecto">
      
      <h1>{data.nomeDoProjecto.name}</h1>
      <div className="Asides">
      <aside className="leftProject">
        <p><strong>Dados do Projecto</strong></p>
        <p>Cliente: {data.nomeDoProjecto.client}</p>
        <p>Custo: {data.nomeDoProjecto.project_cost}</p>
        <p>Data de Início:{data.nomeDoProjecto.date_start}</p>
        <p>Data de Término: {data.nomeDoProjecto.date_end}</p>
        <p><strong>Estado: {data.nomeDoProjecto.completion_percentage}%</strong></p>
      </aside>
      <aside className="rightProjecto">
        <p><strong>Trabalhadores Relacionados</strong></p>
        {relatedWorkers.map(workers=>(
          <p>{workers.name}</p>
        ) )}
        <p><strong>Trabalhadores Não Relacionados</strong></p>
        {norelatedWorkers.map(workers=>(
          <p>{workers.name}</p>
        ) )}
      </aside>
      </div>
      <button>Atualizar dados do projecto</button>
      </div>
      </div>
    )
}
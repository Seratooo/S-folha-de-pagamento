import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import api from '../../services/api';
import accaoRealizada from '../../assets/accaoRealizada.svg'

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

export function dadosProjecto(dado:dados) {
  localStorage.setItem("id", ""+dado.nomeDoProjecto.id)
  localStorage.setItem("name", dado.nomeDoProjecto.name)
  localStorage.setItem("completion_percentage", ""+dado.nomeDoProjecto.completion_percentage)
  localStorage.setItem("client", dado.nomeDoProjecto.client)
  localStorage.setItem("project_cost", dado.nomeDoProjecto.project_cost)
  
  localStorage.setItem("date_start", dado.nomeDoProjecto.date_start)
  localStorage.setItem("date_end", dado.nomeDoProjecto.date_end)
}
interface relatedWorkData{
    name: string;
}

export default function PaginaProjecto(){

  function handleSucess() {
    document.querySelector('.MessageBackground')?.classList.toggle('off')
  }

  const [relatedWorkers,setRelatedWorkers] = useState<relatedWorkData[]>([])
  const [norelatedWorkers,setNoRelatedWorkers] = useState<relatedWorkData[]>([])
  useEffect(()=>{
    api.get(`workers_related_by_project/${Number(localStorage.getItem("id"))}`).then(Response=>{
      setRelatedWorkers(Response.data)
    })
  },[])

  useEffect(()=>{
    api.get(`workers_norelated_by_project/${Number(localStorage.getItem("id"))}`).then(Response=>{
      setNoRelatedWorkers(Response.data)
    })
  },[])
  const [completion_percentage,setCompletion_percentage] = useState(Number(localStorage.getItem("completion_percentage")))  
  function handleCompletetion(event:ChangeEvent<HTMLInputElement>) {
    setCompletion_percentage(Number(event.target.value))
  }
  async function handleUpdateProject() {
    const dados = {
      completion_percentage
    }
    const id = Number(localStorage.getItem("id"))
    await api.put(`updateProjects/${id}`,dados)
   
    document.querySelector('.MessageBackground')?.classList.toggle('off')
    
  }
    return(
      <>

      <div className="principalProjecto">
         <Link to="/show-projects">
          <div className="voltar">
        <FiArrowLeft style={{width:'35px'}}/> voltar
      </div></Link>
      
      <div className="contentProjecto">
      
      <h1>{localStorage.getItem("name")}</h1>
      <div className="Asides">
      <aside className="leftProject">
        <p><strong>Dados do Projecto</strong></p>
        <p>Cliente: {localStorage.getItem("client")}</p>
        <p>Custo: {localStorage.getItem("project_cost")}</p>
        <p>Data de Início:{localStorage.getItem("date_start")}</p>
        <p>Data de Término: {localStorage.getItem("date_end")}</p>
        <p><strong>Estado: {completion_percentage}%</strong></p>
        <fieldset>
        <input type="range" name="task_value" id="" placeholder="Complacêcia" value={completion_percentage} onChange={handleCompletetion}/>
        </fieldset>
      </aside>
      <aside className="rightProjecto">
        <p><strong>Trabalhadores Relacionados</strong></p>
        {relatedWorkers.map(workers=>(
          <p key={workers.name}>{workers.name}</p>
        ) )}
        <p><strong>Trabalhadores Não Relacionados</strong></p>
        {norelatedWorkers.map(workers=>(
          <p key={workers.name}>{workers.name}</p>
        ) )}
      </aside>
      </div>
      <button onClick={handleUpdateProject}>Atualizar dados do projecto</button>
      </div>
      </div>

      <div className="MessageBackground off" onClick={handleSucess}>
            <div className="ShowMessage">
              <div className="MessageImage">
                <img src={accaoRealizada} alt="Imagem de conclusão" />
              </div>
              <div className="MessageConteudo">
                <h2>Concluído</h2>
                <p>Os dados do projecto foram atualizados!!!</p>
                <button>OK</button>
              </div>
            </div>
        </div>

      </>
    )
}
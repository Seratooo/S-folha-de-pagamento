import React, { useEffect, useState } from 'react'
import './style.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import api from '../../services/api';

interface dados{
  id: number;
  name: string;
  imgUrl: string;
}
interface workerData{
  level: string;
  project: string;
  projectFunc: string;
  tasks_performed: number;
  task_value: number;
  name: number;
  imgUrl: string
  responsibility?: string;
  departament?: string;
  qnt_delays?:number;
  qnt_houres_worked?:number;
}
let data:dados;

export function dadosTrabalhador(dado:dados) {
  data  = dado;
}

export default function PaginaTrabalhador() {
  const [trabalhador,setTrabalhador]=useState<workerData[]>([]);
  useEffect(()=>{
    api.get(`workers/${data.id}`).then(Response=>{
      setTrabalhador(Response.data)
    })
  },[])

  return(
    <div className="PrincipalTrabalhador">
  <Link to="/show-workers"><div className="voltar">
        <FiArrowLeft style={{width:'35px'}}/> voltar
      </div></Link>

    <div className="contentTrabalhador">
            <div className="contentImgTrabalhador">
              <img src={data.imgUrl} alt="Imagem do trabalhador"/>
            </div>
            <div className="contentTextTrabalhador">
            {trabalhador.map(
                tb=>tb.responsibility!=null?
                <h1>Trabalhador Não Vinculado</h1>
                :
                <h1>Trabalhador Vinculado</h1>
                )}
              
              <p><strong>Nome: </strong> {trabalhador.map(tb=>tb.name)}</p>
              <p><strong>Nível: </strong> {trabalhador.map(tb=>tb.level)}</p>
              <p><strong>Habilidade: </strong> {trabalhador.map(tb=>tb.projectFunc)}</p>
              <p><strong>Projecto Inserido: </strong> {trabalhador.map(tb=>tb.project)}</p>
              <p><strong>Nº de Tarefas Realizadas: </strong> {trabalhador.map(tb=>tb.tasks_performed)}</p>
              <p><strong>Complacência: </strong> {trabalhador.map(tb=>tb.task_value)}%</p>
              
              {trabalhador.map(
                tb=>tb.responsibility!=null?
                <>
                <p><strong>Responsabilidade: </strong>{tb.responsibility}</p> 
                <p><strong>Departamento: </strong>{tb.departament}</p> 
                <p><strong>Nº de Atrasos: </strong>{tb.qnt_delays}</p>
                <p><strong>Horas trabalhadas: </strong>{tb.qnt_houres_worked}h</p> 
                </>
                :
                ' '
                )}


              <fieldset>

              <input type="number" name="" id="number" placeholder="Adicionar Tarefas completadas"/>
              {trabalhador.map(
                tb=>tb.responsibility!=null?
                <>
                <input type="number" name="" id="" placeholder="Horas trabalhadas" max="24"/>
                <input type="number" name="" id="" placeholder="Horas atrasadas" max="24"/>
                </>
                :
                ''
              )}
              <div style={{display:'flex',alignItems:'center'}}>
              <input type="range" name="task_value" id="" placeholder="Complacêcia"/>
              <p style={{fontFamily:'Roboto',padding:'10px', color:'#353A40'}}>50%</p>
              </div>
              </fieldset>
            </div>
            
    </div>
    <button>Atualizar Dados</button>
    </div>
  )
}
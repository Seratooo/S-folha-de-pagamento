import React, { ChangeEvent, useEffect, useState } from 'react'
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
  fk_worker:number;
  level: string;
  project: string;
  projectFunc: string;
  tasks_performed: number;
  task_value: number;
  name: number;
  imgUrl: string
  responsibility?: string;
  departament?: string;
  qnt_delays?:number | 0;
  qnt_houres_worked?:number | 0;
}
let data:dados;

export function dadosTrabalhador(dado:dados) {
  data  = dado;
}

export default function PaginaTrabalhador() {
  const [trabalhador,setTrabalhador]=useState<workerData[]>([]);
  const [tasks_performed,setTasks_performed] = useState<number>(0)
  const [task_value,setTask_value] = useState<number>(0)
  
  const [qnt_delays,setQnt_delays]= useState<number>(0)
  const [qnt_houres_worked,setQnt_houres_worked]= useState<number>(0)

  useEffect(()=>{
    api.get(`workers/${data.id}`).then(Response=>{
      setTrabalhador(Response.data)
    })
  },[])

  function handleTakPerformed(event:ChangeEvent<HTMLInputElement>) {
    setTasks_performed(Number(event.target.value))
  }
  function handleTaskValue(event:ChangeEvent<HTMLInputElement>) {
    setTask_value(Number(event.target.value))
  }
  function handleQntDelay(event:ChangeEvent<HTMLInputElement>) {
    setQnt_delays(Number(event.target.value))
  }
  function handleQntHoursWorked(event:ChangeEvent<HTMLInputElement>) {
    setQnt_houres_worked(Number(event.target.value))
    
  }
  async function updateRelated() {
    const fk_worker = trabalhador.map(tb=>tb.fk_worker)
    const data = {
      tasks_performed:trabalhador.map(tb=>tb.tasks_performed + Number(tasks_performed)),
      task_value: trabalhador.map(tb=>task_value!=0?task_value:tb.task_value),
    }

    await api.put(`updateRelated/${fk_worker}`,data)
  }

  function handleSalrioNoRelated() {
    let bonusLevel=0;
    let bonusCargo=0;
    const level = String(trabalhador.map(tb=>tb.level))
    const responsabilidade = String(trabalhador.map(tb=>tb.responsibility))
    
    //Falta o if do projecto
    if(level=="Profissional"){
      bonusLevel=80;
    }else if(level=="Tecnico"){
      bonusLevel=60;
    }else if(level=="Qualificado"){
      bonusLevel=40;
    }

    if(responsabilidade=="Chef. Departamento"){
      bonusCargo=120
    }else{
      bonusCargo=200
    }

    const horasDeTrablho = Number(trabalhador.map(tb=>tb.qnt_houres_worked))
    const horasDeAtraso = Number(trabalhador.map(tb=>tb.qnt_delays))

    const salario = horasDeTrablho*12.5 + bonusCargo + bonusLevel + horasDeAtraso*(-5);
    
    console.log(salario+"$");
    
  }

  function handleSalarioRelated() {
    let coeficiente=0;
    const cumprimento = Number(trabalhador.map(tb=>tb.task_value))
    const Tarefas = Number(trabalhador.map(tb=>tb.tasks_performed))

    if(cumprimento>=95){
      coeficiente=21.5
    }else if(cumprimento>=80 && cumprimento<=95){
      coeficiente=18.5
    }else{
      coeficiente=15
    }

    const result = Tarefas*(cumprimento/100)
    const salario = result*coeficiente

    console.log(salario)
  }
  async function updateNoRelated() {
    const fk_worker = trabalhador.map(tb=>tb.fk_worker)
    const data = {
      tasks_performed:trabalhador.map(tb=>tb.tasks_performed + Number(tasks_performed)),
      task_value: trabalhador.map(tb=>task_value!=0?task_value:tb.task_value),
      qnt_delays:trabalhador.map(tb=> Number(tb.qnt_delays) + qnt_delays),
      qnt_houres_worked: trabalhador.map(tb=> Number(tb.qnt_houres_worked) + qnt_houres_worked)
    }
    await api.put(`updateNoRelated/${fk_worker}`,data)

  }
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
              <p><strong>Nº de Tarefas Realizadas: </strong> {trabalhador.map(tb=>tb.tasks_performed + Number(tasks_performed))}</p>
              <p><strong>Complacência: </strong> {trabalhador.map(tb=>task_value!=0?task_value:tb.task_value)}%</p>
              
              {trabalhador.map(
                tb=>tb.responsibility!=null?
                <>
                <p><strong>Responsabilidade: </strong>{tb.responsibility}</p> 
                <p><strong>Departamento: </strong>{tb.departament}</p> 
                <p><strong>Nº de Atrasos: </strong>{Number(tb.qnt_delays) + qnt_delays}</p>
                <p><strong>Horas trabalhadas: </strong>{Number(tb.qnt_houres_worked) + qnt_houres_worked}h</p> 
                </>
                :
                ' '
                )}

                 
              <fieldset>

              <input type="number" name="" id="number" placeholder="Adicionar Tarefas completadas" onChange={handleTakPerformed}/>
    
              {trabalhador.map(
                tb=>tb.responsibility!=null?
                <>
                <input type="number" name="" id="" placeholder="Horas trabalhadas" max="24" onChange={handleQntHoursWorked}/>
                <input type="number" name="" id="" placeholder="Horas atrasadas" max="24" onChange={handleQntDelay}/>
                </>
                :
                ''
              )}
              <div style={{display:'flex',alignItems:'center'}}>
              <input type="range" name="task_value" id="" placeholder="Complacêcia" value={task_value} onChange={handleTaskValue}/>
              <p style={{fontFamily:'Roboto',padding:'10px', color:'#353A40'}}>+{task_value}%</p>
              </div>
              </fieldset>
              {trabalhador.map(
                tb=>tb.responsibility!=null?
                <button onClick={handleSalrioNoRelated}>Ver Salário</button>
                :
                <button onClick={handleSalarioRelated}>Ver Salário</button>
                )}
            </div>
            
    </div>
    {trabalhador.map(
                tb=>tb.responsibility!=null?
                <button onClick={updateNoRelated}>Atualizar Dados</button>
                
                :
                <button onClick={updateRelated}>Atualizar Dados</button>
                )}
    </div>
  )
}
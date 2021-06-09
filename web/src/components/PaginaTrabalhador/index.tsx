import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import api from '../../services/api';
import accaoRealizada from '../../assets/accaoRealizada.svg'
import salario from '../../assets/salarioImg.svg'

interface dados{
  id: number;
  name: string;
  imgUrl: string;
}
interface dadoProjecto{
  id: number;
  name: string;
}
interface workerData{
  fk_worker:number;
  level: string;
  project: string;
  fk_projecto: number;
  projectFunc: string;
  tasks_performed: number;
  task_value: number;
  name: number;
  imgUrl: string
  responsibility?: string;
  departament?: string;
  qnt_delays?:number | 0;
  qnt_houres_worked?:number | 0;
  completion_percentage:number;
  isNoRelated: boolean
}



export function dadosTrabalhador(dado:dados) {
  localStorage.setItem("imgUrl",dado.imgUrl)
  localStorage.setItem("id",""+dado.id)
  localStorage.setItem("name",dado.name)
}

export default function PaginaTrabalhador() {
  const [tasks_performed,setTasks_performed] = useState<number>(0)
  const [task_value,setTask_value] = useState<number>(0)
  
  const [qnt_delays,setQnt_delays]= useState<number>(0)
  const [qnt_houres_worked,setQnt_houres_worked]= useState<number>(0)
  const [dataOfProject,setDataOfProject] = useState<dadoProjecto[]>([])
  const [project_data,setProject_data] = useState(0)
  const [trabalhador,setTrabalhador]=useState<workerData[]>([]);
  const [salarioT,setSalarioT] = useState('')

  useEffect(()=>{
    api.get(`workers/${Number(localStorage.getItem("id"))}`).then(Response=>{
      setTrabalhador(Response.data)
    })
  },[])
  
  useEffect(()=>{
     api.get('projects').then(Response=>{
        setDataOfProject(Response.data)
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
  function handleProject_data(event:ChangeEvent<HTMLSelectElement>) {
    setProject_data(Number(event.target.value))
  }
  function handleSucess() {
    document.querySelector('.MessageBackground')?.classList.toggle('off')
    window.location.reload() 
  }

  function handleShowSalario() {
    document.querySelector('.MessageSalario')?.classList.toggle('off')
  }

   async function updateRelated() {
     const fk_worker = trabalhador.map(tb=>tb.fk_worker)
     const data = {
       tasks_performed:trabalhador.map(tb=>tb.tasks_performed + Number(tasks_performed)),
       task_value: trabalhador.map(tb=>task_value!==0?task_value:tb.task_value),
       project_data: project_data!==0? project_data: trabalhador.map(tb=>tb.fk_projecto)
     }

     await api.put(`updateRelated/${fk_worker}`,data)
     document.querySelector('.MessageBackground')?.classList.toggle('off')
   }

   function handleSalrioNoRelated() {
     let bonusLevel=0;
     let bonusCargo=0;
     const level = String(trabalhador.map(tb=>tb.level))
     const responsabilidade = String(trabalhador.map(tb=>tb.responsibility))
     const cumprimentoDoProjecto = Number(trabalhador.map(tb=>tb.completion_percentage))
    
     if(cumprimentoDoProjecto===100){
       if(level==="Profissional"){
         bonusLevel=80;
       }else if(level==="Tecnico"){
         bonusLevel=60;
       }else if(level==="Qualificado"){
         bonusLevel=40;
       }
     }

     if(responsabilidade==="Chef. Departamento"){
       bonusCargo=120
     }else{
       bonusCargo=200
     }

     const horasDeTrablho = Number(trabalhador.map(tb=>tb.qnt_houres_worked))
     const horasDeAtraso = Number(trabalhador.map(tb=>tb.qnt_delays))

     const salario = 25*horasDeTrablho*12.5 + bonusCargo + bonusLevel + horasDeAtraso*(-5);
    
     setSalarioT(salario.toPrecision(6)+"$")
     handleShowSalario()
   }

   function handleSalarioRelated() {
     let bonusLevel=0;
     let coeficiente=0;
     const cumprimento = Number(trabalhador.map(tb=>tb.task_value))
     const Tarefas = Number(trabalhador.map(tb=>tb.tasks_performed))
     const level = String(trabalhador.map(tb=>tb.level))
     const cumprimentoDoProjecto = Number(trabalhador.map(tb=>tb.completion_percentage))

     if(cumprimentoDoProjecto===100){
      if(level==="Profissional"){
        bonusLevel=80;
      }else if(level==="Tecnico"){
        bonusLevel=60;
      }else if(level==="Qualificado"){
        bonusLevel=40;
      }
    }

    if(cumprimento>95){
      coeficiente=25
    }
     else if(cumprimento<=95 && cumprimento>80){
       coeficiente=21.5
     }else if(cumprimento>=80 && cumprimento<95){
       coeficiente=18.5
     }else{
       coeficiente=15
     }

     const result = cumprimento/Tarefas*100
     const salario = result*coeficiente + bonusLevel

     
     setSalarioT(salario.toPrecision(6)+"$")
     handleShowSalario()
     
   }
   async function updateNoRelated() {
     const fk_worker = trabalhador.map(tb=>tb.fk_worker)
     const data = {
       project_data: project_data!==0? project_data: trabalhador.map(tb=>tb.fk_projecto),
       tasks_performed:trabalhador.map(tb=>tb.tasks_performed + Number(tasks_performed)),
       task_value: trabalhador.map(tb=>task_value!==0?task_value:tb.task_value),
       qnt_delays:trabalhador.map(tb=> Number(tb.qnt_delays) + qnt_delays),
       qnt_houres_worked: trabalhador.map(tb=> Number(tb.qnt_houres_worked) + qnt_houres_worked)
     }
    await api.put(`updateNoRelated/${fk_worker}`,data)   
    document.querySelector('.MessageBackground')?.classList.toggle('off')
   }

  return(
    <>

    <div className="PrincipalTrabalhador">
  <Link to="/show-workers"><div className="voltar">
        <FiArrowLeft style={{width:'35px'}}/> voltar
      </div></Link>

    <div className="contentTrabalhador">
            <div className="contentImgTrabalhador">
              <img src={String(localStorage.getItem("imgUrl"))} alt="Imagem do trabalhador"/>
            </div>
            <div className="contentTextTrabalhador">
            {trabalhador.map(
                tb=>tb.isNoRelated?
                <h1>Trabalhador Não Vinculado</h1>
                :
                <h1>Trabalhador Vinculado</h1>
                )}
              
              <p><strong>Nome: </strong> {trabalhador.map(tb=>tb.name)} &nbsp; &nbsp;
               <strong>Nível: </strong> {trabalhador.map(tb=>tb.level)}</p>
              <p><strong>Habilidade: </strong> {trabalhador.map(tb=>tb.projectFunc)}</p>
              <p><strong>Projecto Inserido: </strong> {trabalhador.map(tb=>tb.project)}</p>
              <p><strong>Nº de Tarefas: </strong> {trabalhador.map(tb=>tb.tasks_performed + Number(tasks_performed))} &nbsp;&nbsp;&nbsp;&nbsp;
              <strong> Tarefas Cumpridas: </strong> {trabalhador.map(tb=>task_value!==0?task_value:tb.task_value)}</p>
              
              {trabalhador.map(
                tb=>tb.isNoRelated?
                <>
                <p><strong>Responsabilidade: </strong>{tb.responsibility} &nbsp;&nbsp;&nbsp;&nbsp;
                 <strong> Departamento: </strong>{tb.departament}</p> 
                <p><strong>Nº de Atrasos: </strong>{Number(tb.qnt_delays) + qnt_delays}&nbsp;&nbsp;&nbsp;&nbsp;
                 <strong> Horas trabalhadas por dia: </strong>{Number(tb.qnt_houres_worked) + qnt_houres_worked}h</p> 
                </>
                :
                ' '
                )}

                 
              <fieldset id="fild8">

              <input type="number" name="" id="number" placeholder="Adicionar Tarefa" onChange={handleTakPerformed} min={Number(trabalhador.map(tb=>tb.tasks_performed))*-1} max={100 - Number(trabalhador.map(tb=>tb.tasks_performed))}/>
    
              {trabalhador.map(
                tb=>tb.isNoRelated?
                <>
                <input type="number" name="" id="" placeholder="Adicinar Carga Horária" min={Number(trabalhador.map(tb=>tb.qnt_houres_worked))*-1} max={24 - Number(trabalhador.map(tb=>tb.qnt_houres_worked))} onChange={handleQntHoursWorked}/>
                <input type="number" name="" id="" placeholder="Nº de Atrasos" min={Number(trabalhador.map(tb=>tb.qnt_delays))*-1} onChange={handleQntDelay}/>
                <select name="project_data" id="" onChange={handleProject_data}>
              <option value="">Mudar projecto</option>
              {dataOfProject.map(data=>(
              <option value={data.id} key={data.id}>{data.name}</option>
              ))}
            </select>
                </>
                :
                ''
              )}
              <div style={{display:'flex',alignItems:'center'}}>
              <input type="range" name="task_value" id="" placeholder="Complacêcia" value={task_value} onChange={handleTaskValue}/>
              <p style={{fontFamily:'Roboto',padding:'10px', color:'#353A40'}}>+{task_value}</p>
              </div>
              {trabalhador.map(
                tb=>tb.isNoRelated?
                ''
                :
                <select name="project_data" id="" onChange={handleProject_data}>
                    <option value="">Mudar projecto</option>
                    {dataOfProject.map(data=>(
                    <option value={data.id} key={data.id}>{data.name}</option>
                    ))}
                </select>
              )}
              
              </fieldset>
              {trabalhador.map(
                tb=>tb.isNoRelated?
                <button onClick={handleSalrioNoRelated} id="salario" key={tb.fk_worker} style={{width:'13rem',height:'2.5rem',fontSize:'1.1rem',marginLeft:'10px',marginTop:'-1rem',background:'#353A40',color:'#c4c4c4'}}>Ver Salário</button>
                :
                <button onClick={handleSalarioRelated} id="salario" key={tb.fk_worker} style={{width:'13rem',height:'2.5rem',fontSize:'1.1rem',marginLeft:'10px',marginTop:'-1rem',background:'#353A40',color:'#c4c4c4'}}>Ver Salário</button>
                )}
            </div>
            
    </div>
    {trabalhador.map(
                tb=>tb.isNoRelated?
                <button onClick={updateNoRelated} key={tb.fk_worker} >Atualizar Dados</button>
                
                :
                <button onClick={updateRelated} key={tb.fk_worker} >Atualizar Dados</button>
                )}
    </div>

    <div className="MessageBackground off" onClick={handleSucess}>
            <div className="ShowMessage">
              <div className="MessageImage">
                <img src={accaoRealizada} alt="Imagem de conclusão" />
              </div>
              <div className="MessageConteudo">
                <h2>Concluído</h2>
                <p>Este usuário foi atualizado com sucesso!!!</p>
                <button>OK</button>
              </div>
            </div>
        </div>

        <div className="MessageSalario off" onClick={handleShowSalario}>
            <div className="ShowMessage">
              <div className="MessageImage">
                <img src={salario} alt="Imagem de conclusão" />
              </div>
              <div className="MessageConteudo">
                <h2>Salário do Trabalhador</h2>
                <p><h1>{salarioT}</h1></p>
                <button>OK</button>
              </div>
            </div>
        </div>

    </>
  )
}
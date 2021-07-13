import React, { useEffect, useState } from 'react'
import './style.css'
import api from '../../services/api'

interface dadosTrabalhador{
  fk_worker:number;
  level: string;
  project: string;
  fk_projecto: number;
  projectFunc: string;
  tasks_performed: number;
  task_value: number;
  name: string;
  imgUrl: string
  responsibility?: string;
  departament?: string;
  qnt_delays?:number | 0;
  qnt_houres_worked?:number | 0;
  completion_percentage:number;
  isNoRelated: boolean
  Meusalario: string | 'hello'
}



export default function PaginaAtualizar() {
  const [trabalhador,setTrabalhador]=useState<dadosTrabalhador[]>([])
  let salarioTotal=0;
  
  useEffect(()=>{
   api.get('workerSalary').then(Response=>{
        setTrabalhador(Response.data)
       
    })
  },[])

  function handleSalrioNoRelated(tb:dadosTrabalhador):string {
    let bonusLevel=0;
    let bonusCargo=0;
    const level = String(tb.level)
    const responsabilidade = String(tb.responsibility)
    const cumprimentoDoProjecto = Number(tb.completion_percentage)
   
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

    const horasDeTrablho = Number(tb.qnt_houres_worked)
    const horasDeAtraso = Number(tb.qnt_delays)

    const salario = 25*horasDeTrablho*12.5 + bonusCargo + bonusLevel + horasDeAtraso*(-5);
    salarioTotal += salario
    return ""+salario.toPrecision(6)+"$"
  }

  function handleSalarioRelated(tb:dadosTrabalhador):string {
    let bonusLevel=0;
    let coeficiente=0;
    const cumprimento = Number(tb.task_value)
    const Tarefas = Number(tb.tasks_performed)
    const level = String(tb.level)
    const cumprimentoDoProjecto = Number(tb.completion_percentage)

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
    salarioTotal += salario
    return ""+salario.toPrecision(6)+"$"
  }
  
 
  return(
    <div className="contentSalary">
       <h1>Folha de Salários</h1>
          <ul className="myUL">
          {trabalhador.map(tb=>
                tb.isNoRelated?
                
                <li key={tb.fk_worker}> <p>{tb.name}</p> <p>Salário: {handleSalrioNoRelated(tb)}</p> </li>
                :
                <li key={tb.fk_worker}> <p>{tb.name}</p> <p>Salário: {handleSalarioRelated(tb)}</p> </li>

          )    

          }
          <li><p></p><p>Total: {salarioTotal.toPrecision(6)} $</p></li>
          </ul>
 
      </div>
    
  )
}
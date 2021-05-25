import React, { useState,ChangeEvent } from 'react'
import Dropzone from '../Dropzone'
import './style.css'

export default function PaginaInserir(){
  const [seletedFile,setSelectedFile]=useState<File>()
  const [isVinculado,setIsVinculado] =useState(true)
  function dataWorker(event: ChangeEvent<HTMLSelectElement>){
    const value = event.target.value
    if(value==="vinculado"){
      setIsVinculado(true)
    }else if(value==="nVinculado"){
      setIsVinculado(false)
    }
  }
  return(
    <div className="conteudo">
        <div>
            <Dropzone onFileUploaded={setSelectedFile}/>
        </div>

        <form action="">
          <fieldset id="fild1">
            <input type="text" placeholder="Nome Completo" />
            <select name="" id="">
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </fieldset>

          <fieldset id="fild1">
            <input type="date" name="" id=" " />
            <select name="" id="">
              <option value="Tecnico">Nível Técnico</option>
              <option value="Profissional">Nível Profissional</option>
              <option value="Qualificado">Nível Qualificado</option>
            </select>
          </fieldset>

          <fieldset id="fildTrabalhador">
            <select name="" id="#selectWorker" onChange={dataWorker}>
              <option value="vinculado">Trabalhador Vinculado</option>
              <option value="nVinculado">Trabalhador Não Vinculado</option>
            </select>
          </fieldset>

          <fieldset id="fild2">
            {
            isVinculado? 
            <div>
            <select name="" id="">
              <option value="">Selecione o projecto</option>
              <option value="">Projecto 1</option>
              <option value="">Projecto 2</option>
              <option value="">Projecto 3</option>
              <option value="">Projecto 4</option>
            </select>
            <input type="number" name="" id="" placeholder="Tarefas completadas" />
            
            <div className="Range">
            <input type="range" name="" id="" placeholder="Complacêcia"/>
            </div>
            </div>
            
            :
            <div>
            <select name="" id="">
              <option value="">Selecione o projecto</option>
              <option value="">Projecto 1</option>
              <option value="">Projecto 2</option>
              <option value="">Projecto 3</option>
              <option value="">Projecto 4</option>
            </select>
            <input type="number" name="" id="" placeholder="Tarefas completadas" />
            
            <div className="Range">
            <input type="range" name="" id="" placeholder="Complacêcia"/>
            <select name="" id="">
              <option value="">Responsabilidade</option>
              <option value="">Chefe de Departamento</option>
              <option value="">Chefe da Empresa</option>
            </select>
            </div>
            <select name="" id="">
              <option value="">Departamentos</option>
              <option value="">RH</option>
              <option value="">Finanças</option>
              <option value="">Tecnologia</option>
            </select>
            <input type="number" name="" id="" placeholder="Horas atrasadas" max="24"/>
            <div className="Horas">
              <input type="number" name="" id="" placeholder="Horas trabalhadas" max="24"/>
              
            </div>
            </div>
            
            }
          </fieldset>
          <button>Inserir Trabalhador</button>
       </form>

    </div>
  )
}
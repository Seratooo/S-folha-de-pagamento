import React, { useState,ChangeEvent, FormEvent, useEffect } from 'react'
import api from '../../services/api'
import Dropzone from '../Dropzone'
import './style.css'

interface dadoProjecto{
  id: number;
  name: string;
}

export default function PaginaInserir(){
  getLastId()
  
  const [name,setName]= useState('')
  const [date_nasc,setDate_nasc] = useState('')
  const [level,setLevel] = useState('')
  const [project_data,setProject_data]=useState(0)
  const [tasks_performed,setTasks_performed]=useState(0)
  const [task_value,setTask_value]=useState(50.0)
  const [responsibility,setResponsibility] = useState('')
  const [departament,setDepartament] = useState('')
  const [qnt_delays,setQnt_delays] = useState(0)
  const [qnt_houres_worked,setQnt_houres_worked] = useState(0)
  const [projectFunc, setProjectFunc] = useState('');

  const [dataOfProject,setDataOfProject] = useState<dadoProjecto[]>([])
  useEffect(()=>{
     api.get('projects').then(Response=>{
        setDataOfProject(Response.data)
    })
  },[])    


  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }
  function handleDate_nasc(event: ChangeEvent<HTMLInputElement>) {
    setDate_nasc(event.target.value)
  }
  function handleLevel(event: ChangeEvent<HTMLSelectElement>) {
    setLevel(event.target.value)
  }
  function handleProject_data(event: ChangeEvent<HTMLSelectElement>) {
    setProject_data(Number(event.target.value))
  }
  function handleTasks_performed(event: ChangeEvent<HTMLInputElement>) {
    setTasks_performed(Number(event.target.value))
  }
  function handleTask_value(event: ChangeEvent<HTMLInputElement>) {
    setTask_value(Number(event.target.value))
  }
  
  function handleResponsability(event: ChangeEvent<HTMLSelectElement>) {
    setResponsibility(event.target.value)
  }
  function handleDepartament(event: ChangeEvent<HTMLSelectElement>) {
    setDepartament(event.target.value)
  }
  function handleDelayHours(event: ChangeEvent<HTMLInputElement>) {
    setQnt_delays(Number(event.target.value))
  }
  function handleWorkerHours(event: ChangeEvent<HTMLInputElement>) {
    setQnt_houres_worked(Number(event.target.value))
  }
  function handleProjectFunc(event:ChangeEvent<HTMLInputElement>) {
    setProjectFunc(event.target.value);
  }
  const [seletedFile,setSelectedFile]=useState<File|any>()
  const [isVinculado,setIsVinculado] =useState(true)

  const [lastId,setLastId] = useState<number>(0)

  async function getLastId() {
    await api.get('lastworker').then(Response=>{
      setLastId(Number(Response.data.id) + 1)
    })
  }

  async function handleSubmit(event:FormEvent) {  
    
    carregarIMG()
      const dataWorker = {
        image:`${lastId}${seletedFile.name}`,
        name,
        date_nasc,
        level,
        
      }
      const dataRelatedWorker = {
        fk_worker: lastId,
        project_data,
        tasks_performed,
        task_value,
        projectFunc
      }
      const dataNoRelatedWorker = {
        fk_worker: lastId,
        project_data,
        tasks_performed,
        task_value,
        responsibility,
        departament,
        qnt_delays,
        qnt_houres_worked,
        projectFunc
      }
      
      await api.post('workers',dataWorker).then(
        isVinculado? await api.post('related-worker',dataRelatedWorker)
        : await api.post('no-related-worker',dataNoRelatedWorker)
        )
   
  }

  function dataWorker(event: ChangeEvent<HTMLSelectElement>){
    const value = event.target.value
    if(value==="vinculado"){
      setIsVinculado(true)
    }else if(value==="nVinculado"){
      setIsVinculado(false)
    }
  }

  async function carregarIMG() {
    const data = new FormData();
    data.append("file", seletedFile, `${lastId}${seletedFile.name}`);
    await api.post('image',data);
  }

  return(
    <div className="conteudo">
        <div>
            <Dropzone onFileUploaded={setSelectedFile}/>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset id="fild1">
            <input type="text" name="name" placeholder="Nome Completo" onChange={handleName} />
            <select name="" id="">
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </fieldset>

          <fieldset id="fild1">
            <input type="date" name="date_nasc" id=" " onChange={handleDate_nasc}/>
            <select name="level" id="" onChange={handleLevel}>
              <option value="">Nível de Formação</option>
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
            <select name="project_data" id="" onChange={handleProject_data}>
              <option value="">Selecione o projecto</option>
              {dataOfProject.map(data=>(
              <option value={data.id} key={data.id}>{data.name}</option>
              ))}
            </select>
            <input type="number" name="tasks_performed" id="" placeholder="Tarefas completadas" onChange={handleTasks_performed}/>
            
            <div className="Range">
            <input type="range" name="task_value" id="" placeholder="Complacêcia" onChange={handleTask_value}/>
            <p style={{fontFamily:'Roboto',padding:'10px', color:'#353A40'}}>{task_value}%</p>
            </div>
            <input type="text" name="prjectFunc" id="projectFunc" placeholder="Papel dentro do projecto" onChange={handleProjectFunc} maxLength={99}/>
            </div>
            
            :
            <div className="nRelacionado">
            <select name="" id="" onChange={handleProject_data}>
              <option value="">Selecione o projecto</option>
              {dataOfProject.map(data=>(
              <option value={data.id} key={data.id}>{data.name}</option>
              ))}
            </select>
            <input type="number" name="" id="number" placeholder="Tarefas completadas" onChange={handleTasks_performed} />
            
            <div className="Range">
            <input type="range" name="" id="" placeholder="Complacêcia" onChange={handleTask_value}/>
            <p style={{fontFamily:'Roboto',padding:'10px', color:'#353A40'}}>{task_value}%</p>

        
            </div>
            <select name="" id="" style={{width:'19rem',marginRight:'4rem'}}onChange={handleDepartament} >
              <option value="">Departamentos</option>
              <option value="RH">RH</option>
              <option value="Finanças">Finanças</option>
              <option value="Tecnologia">Tecnologia</option>
            </select>

            <select name="" id="" style={{width:'19rem',marginRight:'0px'}} onChange={handleResponsability}>
              <option value="">Responsabilidade</option>
              <option value="Chef. Departamento">Chefe de Departamento</option>
              <option value="Chef. Empresa">Chefe da Empresa</option>
            </select>

            <div className="Horas">
              <input type="number" name="" id="" placeholder="Horas trabalhadas" max="24" onChange={handleWorkerHours}/>
              <input type="number" name="" id="" placeholder="Horas atrasadas" max="24" onChange={handleDelayHours}/>
            </div>
            <input type="text" name="prjectFunc" id="projectFunc" placeholder="Papel dentro do projecto" onChange={handleProjectFunc} maxLength={99}/>
            </div>
            
            }
          </fieldset>
          <button type="submit">Inserir Trabalhador</button>
       </form>

    </div>
  )
}
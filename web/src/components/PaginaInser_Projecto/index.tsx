import React, { ChangeEvent, FormEvent, useState } from 'react'
import api from '../../services/api';
import accaoRealizada from '../../assets/accaoRealizada.svg'
import './style.css'

export default function PaginaProjecto() {

  const [completion_percentage,setCompletion_percentage] = useState('50');
  const [name,setName] = useState('');
  const [client,setClient] = useState('');
  const [project_cost,setProject_cost] = useState('');
  const [date_start,setDate_start] = useState('');
  const [date_end,setDate_end]= useState('');
  function handleCompletetionPercent(event: ChangeEvent<HTMLInputElement>) {
    setCompletion_percentage(event.target.value);
  }
  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }
  function handleClient(event:ChangeEvent<HTMLInputElement>) {      
    setClient(event.target.value)
  }
  function handleProjectCust(event:ChangeEvent<HTMLInputElement>) {   
    setProject_cost(event.target.value)
  }
  function handleDataStart(event:ChangeEvent<HTMLInputElement>) { 
    setDate_start(event.target.value)
  }
  function handleDateEnd(event:ChangeEvent<HTMLInputElement>) {
    setDate_end(event.target.value)
  }
  function handleSucess() {
    document.querySelector('.MessageBackground')?.classList.toggle('off')
    window.location.reload() 
  }

  function submit(event:FormEvent) {
    event.preventDefault()

    const data = {
      name,
      client,
      project_cost,
      date_start,
      date_end,
      completion_percentage
    }
    
    api.post('projects',data)
    document.querySelector('.MessageBackground')?.classList.toggle('off')
  }

  return(
    <>

    <div className="conteudo">
    <form onSubmit={submit}>
      <fieldset id="fild5">
        <input type="text" placeholder="Nome do projecto" onChange={handleName}/>
        <input type="text" placeholder="Cliente" onChange={handleClient}/>
      </fieldset>

      <fieldset id="fild5">
        <input type="text" placeholder="Custo do projecto (Akz)" onChange={handleProjectCust}/>
      </fieldset>
      <fieldset id="fild5">
        <input type="date" name="dataStart" id="dataStart" onChange={handleDataStart} />
        <input type="date" name="dataEnd" id="dataEnd" onChange={handleDateEnd} />
      </fieldset>
      <fieldset id="Range">
        <input type="range" name="Range" id="Range" onChange={handleCompletetionPercent} />
        <p>{completion_percentage}%</p> 
      </fieldset>
      <button>Inserir Projecto</button>
    </form>
    </div>

    <div className="MessageBackground off" onClick={handleSucess}>
            <div className="ShowMessage">
              <div className="MessageImage">
                <img src={accaoRealizada} alt="Imagem de conclusão" />
              </div>
              <div className="MessageConteudo">
                <h2>Concluído</h2>
                <p>Este projecto foi inserido com sucesso!!!</p>
                <button>OK</button>
              </div>
            </div>
        </div>

    </>
  )
}

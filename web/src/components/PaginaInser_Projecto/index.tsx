import React from 'react'
import './style.css'
export default function PaginaProjecto() {
  return(
    <form action="">
      <fieldset id="fild11">
        <input type="text" placeholder="Nome do projecto"/>
        <input type="text" placeholder="Cliente"/>
      </fieldset>

      <fieldset id="fild22">
        <input type="text" placeholder="Custo do projecto (Akz)"/>
      </fieldset>
      <fieldset id="fild33">
        <input type="date" name="dataStart" id="dataStart" />
        <input type="date" name="dataEnd" id="dataEnd" />
      </fieldset>
      <fieldset id="fild44">
        <input type="range" name="Range" id="Range" /> 
      </fieldset>
      <button>Inserir Projecto</button>
    </form>
  )
}

      // name,
      // client,
      // project_cost,
      // date_start,
      // date_end,
      // completion_percentage
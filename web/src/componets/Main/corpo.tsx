import React from 'react'
import './style.css'
import Start from '../MainStart/start'
export default function Corpo(){

  return(
    <div className="elements">

    <div className="corpo">
      <aside className="left">
            
            <div className="menuToggle">
              Menu
            </div>

            <div className="texts">
                <p>Inserir trabalhador</p>
                <p>Actualizar dados</p>
                <p>Listar trabalhadores</p>
                <p>Listar projectos</p>
            </div>

            <div className="boxButtom">
                  <button>Folha de Salário</button>
            </div>
      </aside>
      
      <aside className="right">
         <div className="content">
              <div className="elements1">
              <Start/>
              <Start/>
              <Start/>
              
              <Start/>
              <Start/>
              <Start/>

              <Start/>
              <Start/>
              <Start/>

              <Start/>
              <Start/>
              <Start/>
              </div>
            

         </div> 
      </aside>
    </div>

    </div>
  )
}
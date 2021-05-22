import React, { useState } from 'react'
import './style.css'

import atualizar from '../../assets/atualizar.svg'
import inserir from '../../assets/inserir.svg'
import listarProjectos from '../../assets/listarProjetos.svg'
import listarTrabalhador from '../../assets/listarTrabalhador.svg'




import {Start,Start2,Start3,Start4,Start5} from '../StisticComponents/statisticData'
export default function Corpo(){
  const [textTrabalhador,setTextTrabalhador] = useState('Inserir trabalhador') 
  const [textAtualizar,setTextAtualizar] = useState('Actualizar dados')
  const [textListT,setTextListT] = useState('Listar trabalhadores')
  const [textListP,setTextListP] = useState('Listar projectos') 


  
  function menuOnOrOff(){
   const signal = document.querySelector('.left')?.classList.toggle('on')
    
   if(!signal){
    setTextTrabalhador('Inserir trabalhador')
    setTextAtualizar('Actualizar dados')
    setTextListT('Listar trabalhadores')
    setTextListP('Listar projectos')
  }else{
    setTextTrabalhador('')
    setTextAtualizar('')
    setTextListT('')
    setTextListP('')
  }
   
  }
  return(
    <div className="elements">

    <div className="corpo">
      <aside className="left">
            
            <div className="menuToggle" onClick={menuOnOrOff}>
              Menu
            </div>

            <div className="texts">
                <p id="inserir">{textTrabalhador} <img src={inserir} alt="inserir" /> </p>
                <p id="atualizar">{textAtualizar} <img src={atualizar} alt="atualizar" /> </p>
                <p id="listarTrabalhadores">{textListT} <img src={listarTrabalhador} alt="Listar trabalhador" /> </p>
                <p id="listarProjectos">{textListP} <img src={listarProjectos} alt="Listar projectos" />  </p>
            </div>

            <div className="boxButtom">
                  <button>Folha de Salário</button>
            </div>
      </aside>
      
      <aside className="right">
         <div className="content">
              <div className="elements1">
              <Start title="Trabalhadores Vinculados" qnt="1.224"/>
              <Start title="Trabalhadores Não Vinculados" qnt="1.524"/>
              <Start title="Projectos" qnt="524"/>
              <Start2/>
              <Start3/>
              <Start4/>
              <Start5/>
              
              <Start4/>
              <Start5/>
              </div>
            

         </div> 
      </aside>
    </div>

    </div>
  )
}
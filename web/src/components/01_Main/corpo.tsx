import React, { useState } from 'react'
import './style.css'
import {Link} from 'react-router-dom'

import atualizar from '../../assets/atualizar.svg'
import inserir from '../../assets/inserir.svg'
import listarProjectos from '../../assets/listarProjetos.svg'
import listarTrabalhador from '../../assets/listarTrabalhador.svg'

interface dados{
  componente: Function;
}



export default function Corpo(props:dados){
  const [textTrabalhador,setTextTrabalhador] = useState('Inserir trabalhador') 
  const [textAtualizar,setTextAtualizar] = useState('Actualizar dados')
  const [textListT,setTextListT] = useState('Trabalhadores')
  const [textListP,setTextListP] = useState('Projectos') 


  
  function menuOnOrOff(){
   const signal = document.querySelector('.left')?.classList.toggle('on')
    
   if(!signal){
    setTextTrabalhador('Inserir trabalhador'); setTextAtualizar('Actualizar dados'); 
    setTextListT('Trabalhadores'); setTextListP('Projectos');
  }else{
    setTextTrabalhador(''); setTextAtualizar('');
    setTextListT(''); setTextListP('');
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
            <Link to="/insert" style={{color:'#E8E9EB',textDecoration:'none'}}> <p id="inserir" >{textTrabalhador} <img src={inserir} alt="inserir" /></p></Link>
            <Link to="/update" style={{color:'#E8E9EB',textDecoration:'none'}}> <p id="atualizar">{textAtualizar} <img src={atualizar} alt="atualizar" /></p></Link>
            <Link to="/show-workers" style={{color:'#E8E9EB',textDecoration:'none'}}>  <p id="listarTrabalhadores">{textListT} <img src={listarTrabalhador} alt="Listar trabalhador" /></p></Link>
            <Link to="/show-projects" style={{color:'#E8E9EB',textDecoration:'none'}}> <p id="listarProjectos">{textListP} <img src={listarProjectos} alt="Listar projectos" /></p></Link>
            </div>

            <div className="boxButtom">
                  <button>Folha de Salário</button>
            </div>
      </aside>
      
      <aside className="right">
         <div className="content">
              <div className="elements1">
              {<props.componente/>}
              </div>
         </div> 
      </aside>
    </div>

    </div>
  )
}
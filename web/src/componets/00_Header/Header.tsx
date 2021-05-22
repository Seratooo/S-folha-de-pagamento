import React from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import tv from '../../assets/tv.svg'
import tnv from '../../assets/tnv.svg'
import projectos from '../../assets/projectos.svg'
import {Link} from 'react-router-dom'



export default function Header (){
    return(
      <header>
        <div className="elements">
         
        
        <div className="logo">
      <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>

        <div className="content">

            <div className="item">
              <img src={tv} alt="icon" />
              <p>Trabalhador Vinculador</p>
            </div>
            
            <div className="item">
              <img src={tnv} alt="icon" />
              <p>Trabalhador Não Vinculador</p>
            </div>
            
            <div className="item">
              <img src={projectos} alt="icon" />
              <p>Projectos</p>
            </div>

            <div className="btnSearchBox">
                <input type="text" placeholder="Pesquisar"/>
                <button>Adicionar Projecto</button>
            </div>
        </div>
       </div> 
      </header>
    )
}
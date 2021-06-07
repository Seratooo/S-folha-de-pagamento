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

        <Link to="/show-workers/related" style={{color:'#E8E9EB',textDecoration:'none'}}><div className="item">
              <img src={tv} alt="icon" />
                <p>Trabalhadores Vinculados</p> 
              </div></Link>
            
            <Link to="/show-workers/norelated" style={{color:'#E8E9EB',textDecoration:'none'}}>   <div className="item">
              <img src={tnv} alt="icon" />
                <p>Trabalhadores Não Vinculados</p>
            </div></Link>
            
            <Link to="/show-projects" style={{color:'#E8E9EB',textDecoration:'none'}}> <div className="item">
              <img src={projectos} alt="icon" />
              <p>Projectos</p>
            </div></Link>

               <div className="btnSearchBox">
                <input type="text" placeholder="Pesquisar"/>
                <Link to="/add-project" style={{color:'#E8E9EB',textDecoration:'none'}}>   <button>Adicionar Projecto</button></Link> 
            </div>
        </div>
       </div> 
      </header>
    )
}
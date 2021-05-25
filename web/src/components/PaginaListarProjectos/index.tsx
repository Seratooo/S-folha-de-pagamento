import React from 'react'
import Projecto from '../03_Projecto'
import './style.css'
import {Link} from 'react-router-dom'
export default function PaginaListarProjectos() {
  
  return(
    <>
   <Link to="/show-workers/project" style={{textDecoration:'none'}}> <Projecto nomeDoProjecto="Projecto Filadelfia"/></Link> 
   <Link to="/show-workers/project" style={{textDecoration:'none'}}>  <Projecto nomeDoProjecto="Projecto Kiluamge"/> </Link> 
   <Link to="/show-workers/project" style={{textDecoration:'none'}}>  <Projecto nomeDoProjecto="Projecto Manguiz"/></Link> 
   <Link to="/show-workers/project" style={{textDecoration:'none'}}>  <Projecto nomeDoProjecto="Projecto Mendelheve"/></Link> 
   <Link to="/show-workers/project" style={{textDecoration:'none'}}>  <Projecto nomeDoProjecto="Projecto Keve"/></Link> 
   <Link to="/show-workers/project" style={{textDecoration:'none'}}> <Projecto nomeDoProjecto="Projecto Angola On"/></Link> 
    </>
  )
}
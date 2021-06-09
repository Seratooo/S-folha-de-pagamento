import React, { useEffect, useState } from 'react'
import Projecto from '../03_Projecto'
import './style.css'
import {Link} from 'react-router-dom'
import api from '../../services/api'
interface dadosProjecto{
  id: number;
  name: string;
  client: string;
  project_cost: string;
  date_start: string;
  date_end: string;
  completion_percentage:number;
}
export default function PaginaListarProjectos() {

  const [projectos,setProjectos] = useState<dadosProjecto[]>([])
  useEffect(()=>{
  api.get('projects').then(Response=>{
        setProjectos(Response.data)
  })
},[])

  return(
    <>
  {projectos.map((projecto) => (
  <Link to="/show-workers/project" style={{textDecoration:'none'}}> <Projecto nomeDoProjecto={projecto} key={projecto.id}/></Link> 
  ) )}
  </>
  )

}
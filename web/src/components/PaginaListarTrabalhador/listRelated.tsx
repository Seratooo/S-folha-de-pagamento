import React, { useEffect, useState } from 'react'
import UmTrabalhador from '../02_Trabalhador'
import './style.css'
import {Link} from 'react-router-dom'
import api from '../../services/api'
interface dadosTrabalhador{
  id: number;
  name: string;
  imgUrl: string;
}

export default function ListRelated() {
const [trabalhadores,setTrabalhadores]=useState<dadosTrabalhador[]>([])
  useEffect(()=>{
    api.get('allRelatedworkers').then(Response=>{
        setTrabalhadores(Response.data)
    })
  })
  
  return(
    <>
    {trabalhadores.map(trabalhador=>(
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>     <UmTrabalhador imgUrl={trabalhador.imgUrl} name={trabalhador.name} id={trabalhador.id} key={trabalhador.id}/> </Link>
    ))}
    </>
  )
}
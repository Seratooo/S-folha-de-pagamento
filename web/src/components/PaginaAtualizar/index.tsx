import React from 'react'
import UmTrabalhador from '../02_Trabalhador'
import './style.css'
import workerImg1 from '../../assets/avatars/worker1.svg'
import workerImg2 from '../../assets/avatars/worker2.svg'
import workerImg3 from '../../assets/avatars/worker3.svg'
import {Link} from 'react-router-dom'

export default function PaginaAtualizar() {

  return(
    <>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>     <UmTrabalhador imgUrl={workerImg1} name="Mariana Morena Margarida" id={1}/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador  imgUrl={workerImg2} name="André Mahatham" id={2}/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>  <UmTrabalhador  imgUrl={workerImg3} name="Shaddam Amargebraham" id={4}/> </Link>

    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imgUrl={workerImg1} name="Mariana Morena Margarida" id={5}/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>  <UmTrabalhador imgUrl={workerImg2} name="André Mahatham" id={6}/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>  <UmTrabalhador imgUrl={workerImg3} name="Shaddam Amargebraham" id={7}/> </Link>

    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imgUrl={workerImg1} name="Mariana Morena Margarida" id={8}/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imgUrl={workerImg2} name="André Mahatham" id={9}/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imgUrl={workerImg3} name="Shaddam Amargebraham" id={10}/> </Link>

    </>
  )
}
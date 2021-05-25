import React from 'react'
import UmTrabalhador from '../02_Trabalhador'
import './style.css'
import workerImg1 from '../../assets/avatars/worker1.svg'
import workerImg2 from '../../assets/avatars/worker2.svg'
import workerImg3 from '../../assets/avatars/worker3.svg'
import {Link} from 'react-router-dom'

export default function PaginaListarTrabalhador() {
  return(
    <>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>     <UmTrabalhador imagem={workerImg1} nome="Mariana Morena Margarida" descricao="Especialista em blabla bla bla"/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador  imagem={workerImg2} nome="André Mahatham" descricao="Diretor de blabla bla bla"/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>  <UmTrabalhador  imagem={workerImg3} nome="Shaddam Amargebraham" descricao="Engenheiro de blabla bla bla"/> </Link>

    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imagem={workerImg1} nome="Mariana Morena Margarida" descricao="Especialista em blabla bla bla"/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>  <UmTrabalhador imagem={workerImg2} nome="André Mahatham" descricao="Diretor de blabla bla bla"/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>  <UmTrabalhador imagem={workerImg3} nome="Shaddam Amargebraham" descricao="Engenheiro de blabla bla bla"/> </Link>

    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imagem={workerImg1} nome="Mariana Morena Margarida" descricao="Especialista em blabla bla bla"/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imagem={workerImg2} nome="André Mahatham" descricao="Diretor de blabla bla bla"/> </Link>
    <Link to="/show-workers/worker" style={{textDecoration:'none'}}>   <UmTrabalhador imagem={workerImg3} nome="Shaddam Amargebraham" descricao="Engenheiro de blabla bla bla"/> </Link>

    </>
  )
}
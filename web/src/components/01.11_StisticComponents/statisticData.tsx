import React from 'react'
import './style.css'
import trabalhadores_recentes from '../../assets/trecentes.svg'
import Meusclientes from '../../assets/clientes.svg'


interface data{
  title: string;
  qnt: string;
}
interface data2{
  media: number;
}
interface data3{
  melhorTrabalhador: string;
}
export const  Start = (props:data) =>{
  return(
    <div className="Principal">
        <div className="title">
            <p>{props.title}</p>
        </div>
        <div className="qntd">
            <p>{props.qnt}</p>
        </div>
    </div>
  )
}

export const Start2 = (props:data2)=>{
  return(
    <div className="Principal" style={{background:"#3EE9C0"}}>
    <div className="title" style={{width:'24rem', height:'4rem'}}>
        <p>Projectos Concluídos</p>
    </div>
    <div className="qntd" style={{width:'24rem', height:'6rem'}}>
        <p>{props.media}%</p>
    </div>
    </div>
  )
}
export const Start3 = (props:data3)=>{
  return(
    <div className="Principal" >
    <div className="title" style={{width:'31rem', height:'4rem'}}>
        <p>Trabalhador com melhor desempenho</p>
    </div>
    <div className="qntd" style={{width:'31rem', height:'6rem'}}>
        <p>{props.melhorTrabalhador}</p>
    </div>
    </div>
  )
}

export const Start4 = ()=>{
  return(
    <div className="Principal" >
    <div className="title" style={{width:'31rem', height:'5rem'}}>
        <p>Gerencie Trabalhadores</p>
    </div>
    <div className="qntd" style={{width:'31rem', height:'9rem'}}>
        <img src={trabalhadores_recentes} alt="trabalhadores recentes" style={{width:'8rem'}}/>
    </div>
    </div>
  )
}

export const Start5 = ()=>{
  return(
    <div className="Principal" style={{background:"#3EE9C0"}}>
    <div className="title" style={{width:'24rem', height:'5rem'}}>
        <p>Gerencie Projectos</p>
    </div>
    <div className="qntd" style={{width:'24rem', height:'9rem'}}>
    <img src={Meusclientes} alt="trabalhadores recentes" style={{width:'8rem'}}/>
    </div>
    </div>
  )
}
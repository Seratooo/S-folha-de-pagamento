import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import { dadosTrabalhador } from '../PaginaTrabalhador'

import './style.css'

interface dados{
  id: number;
  name: string;
  imgUrl: string;
}
interface workerData{
  projectFunc: string;
}

export default function UmTrabalhador(props: dados){
  function clickiNoTrabalhador() {
    dadosTrabalhador(props);
  }

  const [trabalhador,setTrabalhador]=useState<workerData[]>([]);
  const id = props.id;
  
  useEffect(()=>{
    api.get(`workers/${id}`).then(Response=>{
      setTrabalhador(Response.data)
    })
  },[id])

  return (
    <div className="contentMain" onClick={clickiNoTrabalhador} key={props.id+1} >
        <div className="contentImg" key={props.id+2}>
              <img src={props.imgUrl} alt="Trabalhador 1" />
        </div>
        <div className="contentText" key={props.id+3}>
          <h3>{props.name}</h3>
          <p>{trabalhador.map(tb=>tb.projectFunc)}</p>
        </div>
    </div>
  )
}
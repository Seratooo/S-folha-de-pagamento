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
  useEffect(()=>{
    api.get(`workers/${props.id}`).then(Response=>{
      setTrabalhador(Response.data)
      console.log(Response.data)
    })
  },[])

  return (
    <div className="contentMain" onClick={clickiNoTrabalhador}>
        <div className="contentImg">
              <img src={props.imgUrl} alt="Trabalhador 1" />
        </div>
        <div className="contentText">
          <h3>{props.name}</h3>
          <p>{trabalhador.map(tb=>tb.projectFunc)}</p>
        </div>
    </div>
  )
}
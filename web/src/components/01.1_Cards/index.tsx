import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import {Start,Start2,Start3,Start4,Start5} from '../01.11_StisticComponents/statisticData'

interface worker{
  qntd: number;
}
interface projects{
  qntdProjectos:number
}
interface media{
  media:number;
}
interface best{
  name:string;
}

export default function PaginaInicial(){
  const [qntRelated,setQntRelated] = useState<worker[]>([{qntd:0}]);
  useEffect(()=>{
    api.get('countRelated').then(Response=>{
      setQntRelated(Response.data)
    })
  })

  const [qntNoRelated,setNoQntRelated] = useState<worker[]>([{qntd:0}]);
  useEffect(()=>{
    api.get('countNoRelated').then(Response=>{
      setNoQntRelated(Response.data)
    })
  })

  const [qntProjects,setProjects] = useState<projects[]>([{qntdProjectos:0}]);
  useEffect(()=>{
    api.get('countprojects').then(Response=>{
      setProjects(Response.data)
    })
  })

  const [media,setMedia] = useState<media[]>([{media:0}]);
  useEffect(()=>{
    api.get('mediaprojects').then(Response=>{
      setMedia(Response.data)
    })
  })

  const [best,setBest] = useState<best[]>([{name:''}]);
  useEffect(()=>{
    api.get('bestworker').then(Response=>{
      setBest(Response.data)
    })
  })
  return(
    <>
              <Start title="Trabalhadores Vinculados" qnt={""+qntRelated.map(qR=>qR.qntd)}/>
              <Start title="Trabalhadores Não Vinculados" qnt={""+qntNoRelated.map(qNR=>qNR.qntd)}/>
              <Start title="Projectos" qnt={""+qntProjects.map(qntP=>qntP.qntdProjectos)}/>
              <Start2 media={Number(media.map(m=>m.media))}/>
              <Start3 melhorTrabalhador={String(best.map(n=>n.name))}/>
              <Start4/>
              <Start5/>
              
    </>
  )
}
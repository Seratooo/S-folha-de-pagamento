import { Request,Response} from 'express'
import knex from '../database/connection'
import relatedWorkerController from './related-workerControler';

let idWorker:number;

class workerController{
  async create (request:Request,response:Response){
    const {
      image,
      name,
      date_nasc,
      level
    }=request.body

    const dataWorker = {
      image: 'Image-Fake',
      name,
      date_nasc,
      level
    }
    const id = await knex('workers').insert(dataWorker)
    idWorker = id[0];
    
    return response.json({
      id: idWorker,
      ...dataWorker
    })
  }

  async getWorkers (request:Request,response:Response){
    
    const workers = await knex('workers').select('*')
    //Transformando dados
    const serializedWorkers  = workers.map(work => {
      return {
        id: work.id,
        name: work.name,
        imgUrl: `http://localhost:3333/uploads/${work.image}`,
      }
    })
    response.send(serializedWorkers)
  }

  async show(request:Request,response:Response){

    const { id } = request.params
    const worker = await knex('workers').where('id',id).first()
    
    if(!worker) return response.status(400).json({message: 'Trabalhador desconhecido'})
    
    const relatedWorker = await knex('related_workers')
    .join('workers', 'related_workers.fk_worker','=','workers.id')
    .where('workers.id',id)
    
  
    const noRelatedWorker = await knex('no_related_workers')
    .join('workers', 'no_related_workers.fk_worker','=','workers.id')
    .where('workers.id',id)
    
    
    if(noRelatedWorker.length>0) return response.json(noRelatedWorker)
    

    else if(relatedWorker.length>0) return response.json(relatedWorker)

    else{
      return response.json({
        worker,
        Estado: 'Trabalhador não Inserido'
      })
    }
  }

  async index(request:Request, response:Response){
    
    const {name,level}= request.query
    const dataWorker = await knex('workers').where('name','like', String('%'+name+'%')).where('level','like', String('%'+level+'%'))
    return response.json({dataWorker})
    
    }
    getLastWorker(){
    const idFixo = idWorker
    return idFixo;
  }
}
export default workerController


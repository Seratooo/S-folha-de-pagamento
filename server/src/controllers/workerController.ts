import { Request,Response} from 'express'
import knex from '../database/connection'

let idWorker:number;

class workerController{
  async create (request:Request,response:Response){
    const {
      image,
      name,
      date_nasc,
      level
    }=request.body
  
    const id = await knex('workers').insert({
      image: 'Image-Fake',
      name,
      date_nasc,
      level
    })
    idWorker = id[0];
    return response.json({success: true})
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

   getLastWorker(){
    return idWorker;
  }
}
export default workerController


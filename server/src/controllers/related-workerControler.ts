import { Request,Response} from 'express'
import knex from '../database/connection'
import workerController from '../controllers/workerController'

let idWorker = new workerController()

class relatedWorkerController{
  async create (request:Request,response:Response){
    const {
       fk_worker,
       project_data,
       tasks_performed,
       task_value,
     } = request.body
   
    await knex('related_workers').insert({
       fk_worker: idWorker.getLastWorker,
       project_data,
       tasks_performed,
       task_value,
    })
   
         return response.json({succes: true})
   }
}

export default relatedWorkerController
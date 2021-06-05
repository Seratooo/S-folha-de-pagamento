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
       projectFunc
     } = request.body

   const dataRealtedWorker = {
       fk_worker,
       project_data,
       tasks_performed,
       task_value,
       projectFunc
   }
    await knex('related_workers').insert(dataRealtedWorker)

         return response.json(dataRealtedWorker)
   }
}

export default relatedWorkerController
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

   async update(request:Request,response:Response){
    const id = request.params.id; 
    
    const {
      tasks_performed,
      task_value,
      project_data
     } = request.body

     const data = {
      tasks_performed,
      task_value,
      project_data
     }
     await knex('related_workers').update(data).where('fk_worker',id);
     return response.json(data);
   }
}

export default relatedWorkerController
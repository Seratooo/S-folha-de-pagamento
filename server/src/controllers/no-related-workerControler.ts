import { Request,Response} from 'express'
import knex from '../database/connection'
import workerController from '../controllers/workerController'

let idWorker = new workerController()

class noRelatedWorkerController{
  async create (request:Request,response:Response){
    const{
      fk_worker,
      project_data,
      tasks_performed,
      task_value,
      responsibility,
      departament,
      qnt_delays,
      qnt_houres_worked
    }= request.body
     
    const dataNoRelatedWorkers = {
      fk_worker,
      project_data,
      tasks_performed,
      task_value,
      responsibility,
      departament,
      qnt_delays,
      qnt_houres_worked
    }
    await knex('no_related_workers').insert(dataNoRelatedWorkers)
  
     return response.json(dataNoRelatedWorkers)
  }
}

export default noRelatedWorkerController
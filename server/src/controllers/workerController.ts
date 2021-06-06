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
      image,
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
  async lastWorkers(request:Request,response:Response){
    const worker = await knex('workers').max('id').select('workers.id').first()
    return response.json(worker)
  }
   async showRelatedWorkers_withProject(request:Request,response:Response){
    const { id } = request.params
    
    const workers = await knex('workers')
    .join('related_workers', 'related_workers.fk_worker','=','workers.id')
    .join('projects','related_workers.project_data','=','projects.id')
    .where('related_workers.project_data',id).select('workers.name','workers.id')

    return response.json(workers)
   }
   async showNoRelatedWorkers_withProject(request:Request,response:Response){
    const { id } = request.params
    
    const workers = await knex('workers')
    .join('no_related_workers', 'no_related_workers.fk_worker','=','workers.id')
    .join('projects','no_related_workers.project_data','=','projects.id')
    .where('no_related_workers.project_data',id).select('workers.name','workers.id')

    return response.json(workers)
   }

   async showall(request:Request,response:Response){
    const NoRelatedworkers = await knex('workers')
    .join('no_related_workers', 'no_related_workers.fk_worker','=','workers.id')
    .join('projects','no_related_workers.project_data','=','projects.id')
    .select('workers.id','workers.name','workers.level','projects.name as projecto','no_related_workers.projectFunc','no_related_workers.tasks_performed','no_related_workers.task_value','no_related_workers.responsibility','no_related_workers.departament','no_related_workers.qnt_delays','no_related_workers.qnt_houres_worked')
    
    const RelatedWorkers = await knex('workers')
    .join('related_workers', 'related_workers.fk_worker','=','workers.id')
    .join('projects','related_workers.project_data','=','projects.id')
    .select('workers.id','workers.name','workers.level','projects.name as projecto','related_workers.projectFunc','related_workers.tasks_performed','related_workers.task_value')

    const data = [
      ...RelatedWorkers,
      ...NoRelatedworkers
    ]
    return response.json(data)

   }

  async show(request:Request,response:Response){

    const { id } = request.params
    const worker = await knex('workers').where('id',id).first()
    
    if(!worker) return response.status(400).json({message: 'Trabalhador desconhecido'})
    
// interface rW{
//     id: number;
//     fk_worker: number;
//     project_data: number;
//     tasks_performed: number;
//     task_value: number;
//     image: string;
//     name: string;
//     date_nasc: string;
//     level: string;
// }

    const relatedWorker = await knex('related_workers')
    .join('workers', 'related_workers.fk_worker','=','workers.id')
    .where('workers.id',id)
    .join('projects','related_workers.project_data','=','projects.id')
    .where('workers.id',id).select('workers.id','workers.name','workers.level','workers.image','projects.name as project','related_workers.projectFunc','related_workers.tasks_performed','related_workers.task_value','related_workers.fk_worker')
  
    const serializedRelatedWorkers  = relatedWorker.map(work => {
      return {
        id: work.id,
        fk_worker: work.fk_worker,
        name: work.name,
        level:work.level,
        imgUrl: `http://localhost:3333/uploads/${work.image}`,
        project: work.project,
        projectFunc: work.projectFunc,
        tasks_performed: work.tasks_performed,
        task_value: work.task_value,
      }
    })
  
    const noRelatedWorker = await knex('no_related_workers')
    .join('workers', 'no_related_workers.fk_worker','=','workers.id')
    .where('workers.id',id)
    .join('projects','no_related_workers.project_data','=','projects.id')
    .where('workers.id',id).select('workers.id','workers.name','workers.level','workers.image','projects.name as project','no_related_workers.projectFunc','no_related_workers.tasks_performed','no_related_workers.task_value','no_related_workers.responsibility','no_related_workers.departament','no_related_workers.qnt_delays','no_related_workers.qnt_houres_worked','no_related_workers.fk_worker')
    

    const serializedNoRelatedWorkers  = noRelatedWorker.map(work => {
      return {
        id: work.id,
        fk_worker:work.fk_worker,
        name: work.name,
        level:work.level,
        imgUrl: `http://localhost:3333/uploads/${work.image}`,
        project: work.project,
        projectFunc: work.projectFunc,
        tasks_performed: work.tasks_performed,
        task_value: work.task_value,
        responsibility: work.responsibility,
        departament: work.departament,
        qnt_delays: work.qnt_delays,
        qnt_houres_worked: work.qnt_houres_worked
      }
    })

    
    
    if(noRelatedWorker.length>0) return response.json(
      serializedNoRelatedWorkers
    )
    

    else if(relatedWorker.length>0) return response.json(
      serializedRelatedWorkers
    )

    else{
      return response.json([
        worker]
      )
    }
  }

  async index(request:Request, response:Response){
    
    const {name,level}= request.query
    const dataWorker = await knex('workers').where('name','like', String('%'+name+'%')).where('level','like', String('%'+level+'%'))
    return response.json(dataWorker)
    
    }
    getLastWorker(){
    const idFixo = idWorker
    return idFixo;
  }
}
export default workerController


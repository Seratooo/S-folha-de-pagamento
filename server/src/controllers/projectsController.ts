import { Request,Response} from 'express'
import knex from '../database/connection'

class projectsController{
  async create (request:Request,response:Response){

    const {
      name,
      client,
      project_cost,
      date_start,
      date_end,
      completion_percentage
    }= request.body

    const dataProjects = {
      name,
      client,
      project_cost,
      date_start,
      date_end,
      completion_percentage
    }
    await knex('projects').insert(dataProjects)

    return response.json(dataProjects)

}
   async getAllProjects(request:Request,response:Response){
     const projects = await knex('projects').select('*').orderBy('completion_percentage','asc')
     
     if(projects.length===0) return response.status(400).json({Message: "Sem Projectos de momento"})

    return response.json(projects)

    }

    async update(request:Request,response:Response){
      const id = request.params.id; 
      
      const {
        completion_percentage
       } = request.body
  
       const data = {
        completion_percentage
       }
       await knex('projects').update(data).where('id',id);
       return response.json(data);
     }
   

  }

export default projectsController
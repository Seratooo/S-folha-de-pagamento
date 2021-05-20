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

    return response.json({dataProjects})

}
}

export default projectsController
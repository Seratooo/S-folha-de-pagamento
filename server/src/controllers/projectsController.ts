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

    await knex('projects').insert({
      name,
      client,
      project_cost,
      date_start,
      date_end,
      completion_percentage
    })

    return response.json({success: true})

}
}

export default projectsController
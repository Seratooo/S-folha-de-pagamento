import express, { request, response } from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/workers', async (request,response)=>{
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
})

routes.post('/workers',async (request,response)=>{
  const {
    image,
    name,
    date_nasc,
    level
  }=request.body

  await knex('workers').insert({
    image,
    name,
    date_nasc,
    level
  })

  return response.json({success: true})
})

routes.post('/related-worker',async (request,response)=>{
 const {
    fk_worker,
    project_data,
    tasks_performed,
    task_value,
  } = request.body
 await knex('related_workers').insert({
    fk_worker,
    project_data,
    tasks_performed,
    task_value,
 })

      return response.json({succes: true})
})

routes.post('/no-related-worker', async(request,response)=>{
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
   
  await knex('no_related_workers').insert({
    fk_worker,
    project_data,
    tasks_performed,
    task_value,
    responsibility,
    departament,
    qnt_delays,
    qnt_houres_worked
   })

   return response.json({success:true})
})

routes.post('/projects', async (request,response)=>{

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

})


export default routes
import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/workers', async (request,response)=>{
  const workers = await knex('workers').select('*')

  //Transformando dados
  const serializedWorkers  = workers.map(work => {
    return {
      name: work.name,
      imgUrl: `http://localhost:3333/uploads/${work.image}`,
    }
  })
  response.send(serializedWorkers)
})

export default routes
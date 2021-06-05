import express, { request, response } from 'express'
import multer from 'multer'
import {multerConfig} from './configs/multer'
import noRelatedWorkerController from './controllers/no-related-workerControler'
import projectsController from './controllers/projectsController'
import relatedWorkerController from './controllers/related-workerControler'
import workerController from './controllers/workerController'
import path from "path";

const routes = express.Router()
const worker = new workerController()
const projects = new projectsController()
const relatedWork = new relatedWorkerController()
const noRelatedWork = new noRelatedWorkerController()

routes.post('/image',multer(multerConfig).single("file"),(req,res)=>{
  console.log(req.file)

  return res.json({hello:'ok'})
})

routes.get('/workers', worker.getWorkers)
routes.get('/workers/:id', worker.show)
routes.get('/allworkers/', worker.showall)


routes.get('/workers_related_by_project/:id', worker.showRelatedWorkers_withProject)
routes.get('/workers_norelated_by_project/:id', worker.showNoRelatedWorkers_withProject)

routes.get('/workers-search', worker.index)
routes.get('/lastworker', worker.lastWorkers)


routes.post('/workers',worker.create)

routes.post('/related-worker',relatedWork.create)


routes.post('/no-related-worker',noRelatedWork.create)

routes.post('/projects',projects.create)
routes.get('/projects',projects.getAllProjects)


export default routes
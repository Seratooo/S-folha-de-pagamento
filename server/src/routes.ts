import express, { request, response } from 'express'
import multer from 'multer'
import {multerConfig} from './configs/multer'
import noRelatedWorkerController from './controllers/no-related-workerControler'
import projectsController from './controllers/projectsController'
import relatedWorkerController from './controllers/related-workerControler'
import workerController from './controllers/workerController'

const routes = express.Router()
const worker = new workerController()
const projects = new projectsController()
const relatedWork = new relatedWorkerController()
const noRelatedWork = new noRelatedWorkerController()


routes.get('/workers', worker.getWorkers)
routes.get('/workers/:id', worker.show)
routes.get('/workerSalary',worker.showWorkerSalary)
routes.get('/allRelatedworkers/', worker.showallRelated)
routes.get('/allNoRelatedworkers/', worker.showallNoRelated)
routes.get('/workers_related_by_project/:id', worker.showRelatedWorkers_withProject)
routes.get('/workers_norelated_by_project/:id', worker.showNoRelatedWorkers_withProject)
routes.get('/workers-search', worker.index)
routes.get('/lastworker', worker.lastWorkers)
routes.get('/bestworker', worker.bestWorker)
routes.get('/countRelated',worker.countlRelated)
routes.get('/countNoRelated',worker.countlNoRelated)

routes.get('/projects',projects.getAllProjects)
routes.get('/countprojects',projects.countAllProjects)
routes.get('/mediaprojects',projects.ProjectsCompleted)

routes.post('/workers',worker.create)
routes.post('/related-worker',relatedWork.create)
routes.post('/no-related-worker',noRelatedWork.create)
routes.post('/projects',projects.create)
routes.post('/image',multer(multerConfig).single("file"),(req,res)=>{return res.json({message:'ok'})})

routes.put('/updateRelated/:id',relatedWork.update)
routes.put('/updateNoRelated/:id',noRelatedWork.update)
routes.put('/updateProjects/:id',projects.update)

export default routes
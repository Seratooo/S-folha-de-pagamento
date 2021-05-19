import express, { json, request, response } from 'express'
import routes from './routes'
const app = express()
import path from 'path'
//PARA USAR JSON NO EXPRESS
app.use(express.json())

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))

app.listen(3333)

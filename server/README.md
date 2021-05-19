# Passos para instalação do ambiente

npm init -y
npm install express
npm i -D @types/express

npm i -D typescript

npm install ts-node -D
npm tsc --init

Agora é só executar com
npx ts-node src/caminho.ts 

Ou podemos instalar o 
npm ts-node-dev -D

Agora é só fazer npx ts-node-dev src/caminho.ts

Trabalhando com rotas 

```typescript
import express, { json, request, response } from 'express'

const app = express()

//PARA USAR JSON NO EXPRESS
app.use(express.json())
app.get('/users',(request,response)=>{

  response.json([
    'Abubacar',
    'Paulo',
    'Serato'
  ])
})

const users = [
  'Abubacar',
  'Paulo',
  'Serato'
]
app.get('/users/:id',(request,response)=>{

  const id = Number(request.params.id)
  const user = users[id]

  response.json(user)
})

app.get('/users',(request,response)=>{
  const search = String(request.query.search)
  const filterUser = users.filter(user=> user.includes(search))
   response.json(filterUser)
})

app.post('/user',(req,res)=>{
  const user = req.body
  console.log(user)
  return res.json(user)
})

app.post('/users',(request,response)=>{
  const user = {
    name: "Paulo",
    email: "serato@gmail.com"
  }

  return response.json(user)
})

app.listen(3333)

```

Para o usar o knex pra cirar tabelas
npm install knex

instalar o sqlite 3 pra bd
npm install sqlite3

Fazer Coneção
```typescript
import knex from 'knex'
import path from 'path'

const connection = knex({
  client: 'sql3',
  connection: {
    filename: path.resolve(__dirname,'database.sqlite')
  }
})

export default connection;
```

Para rodar o sqlite
sudo apt install sqlite
sudo apt-get install sqlite3 libsqlite3-dev 
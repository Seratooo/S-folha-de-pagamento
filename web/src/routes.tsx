import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';

import App from './App';
import Inserir from './Pages/Inserir';
import Atualizar from './Pages/Atualizar'; 
import ListarProjectos from './Pages/ListarProjectos';
import ListarTrabalhadores from './Pages/ListarTrabalhadores';
import Trabalhador from './Pages/Trabalhador';
import Projecto from './Pages/Projecto'
import AddProjecto from './Pages/AddProjecto'
import TrabalhadorNR from './Pages/TrabalhadorNRelacionado'
import TrabalhadorR from './Pages/TrabalhadorRelacionado'

const Routes = () => {
  return (
<BrowserRouter>
  <Switch>
     <Route exact path='/' component={App}/>
     <Route exact path='/insert' component={Inserir} />
     <Route exact path='/update' component={Atualizar} />
     <Route exact path='/show-workers' component={ListarTrabalhadores} />
     <Route exact path='/show-projects' component={ListarProjectos} />
     <Route exact path='/show-workers/worker' component={Trabalhador} />
     <Route exact path='/show-workers/project' component={Projecto} />
     <Route exact path='/add-project' component={AddProjecto} />
     <Route exact path='/show-workers/related' component={TrabalhadorR} />
     <Route exact path='/show-workers/norelated' component={TrabalhadorNR} />
     
  </Switch>
</BrowserRouter>
  );
}

export default Routes;
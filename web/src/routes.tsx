import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Inserir from './Pages/Inserir';
import Atualizar from './Pages/Atualizar'; 
import ListarProjectos from './Pages/ListarProjectos';
import ListarTrabalhadores from './Pages/ListarTrabalhadores';
import Trabalhador from './Pages/Trabalhador';
import Projecto from './Pages/Projecto'
import AddProjecto from './Pages/AddProjecto'
import TrabalhadorNR from './Pages/TrabalhadorNRelacionado'
import TrabalhadorR from './Pages/TrabalhadorRelacionado'
import PInicial from './Pages/PaginaInicial';

const Routes = () => {
  return (
<BrowserRouter>
     <Route exact path='/' component={PInicial} key={1}/>
     <Route exact path='/insert' component={Inserir} key={2}/>
     <Route exact path='/update' component={Atualizar} key={3}/>
     <Route exact path='/show-workers' component={ListarTrabalhadores} key={4}/>
     <Route exact path='/show-projects' component={ListarProjectos} key={5}/>
     <Route exact path='/show-workers/worker' component={Trabalhador} key={6}/>
     <Route exact path='/show-workers/project' component={Projecto} key={7}/>
     <Route exact path='/add-project' component={AddProjecto} key={8}/>
     <Route exact path='/show-workers/related' component={TrabalhadorR} key={9}/>
     <Route exact path='/show-workers/norelated' component={TrabalhadorNR} key={10}/>
</BrowserRouter>
  );
}

export default Routes;
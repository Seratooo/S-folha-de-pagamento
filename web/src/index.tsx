import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Inserir from './Pages/Inserir';
import Atualizar from './Pages/Atualizar'; 
import ListarProjectos from './Pages/ListarProjectos';
import ListarTrabalhadores from './Pages/ListarTrabalhadores';

 



ReactDOM.render(
  <BrowserRouter>
  <Switch>
     <Route exact path='/' component={App}/>
     <Route exact path='/insert' component={Inserir} />
     <Route exact path='/update' component={Atualizar} />
     <Route exact path='/show-workers' component={ListarTrabalhadores} />
     <Route exact path='/show-projects' component={ListarProjectos} />

  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);


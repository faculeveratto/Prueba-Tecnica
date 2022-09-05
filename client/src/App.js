import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './Components/Details/details';
import Home from './Components/Home/home';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/eventos/:id' component={Details}/> 
      </Switch>
    </div>
  );
}

export default App;
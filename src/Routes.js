import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NationAdd from './pages/NationAdd'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/addnation' component={NationAdd} />
    </Switch>
  );
};

export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Marth from './pages/marth';
import Lucina from './pages/lucina';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/marth" component={Marth} />
    <Route exact path="/lucina" component={Lucina} />
  </Switch>
)


export default Routes;
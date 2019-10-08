import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Marth from './marth';
import Lucina from './lucina';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/marth" component={Marth} />
    <Route exact path="/lucina" component={Lucina} />
  </Switch>
)


export default Routes;
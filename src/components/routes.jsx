import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
// import Characters from `../../data/character.js`
import CharacterPage from './pages/character'
import Stages from './pages/stages';

function Character(props) {
  return <h1>Hello {props.match.params.character}!</h1>;
}

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/:character" component={CharacterPage} />
    <Route exact path="/stages" component={Stages} />
    {/* {Characters.map(character => {
      <Route exact path={`/${character.name}`} component={Character} />
    })} */}

  </Switch>
)


export default Routes;
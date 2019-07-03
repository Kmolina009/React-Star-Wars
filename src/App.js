import React, { Component }from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-route-dom';
import { getAllStarShips } from '../services/sw-api';
import StarShipPage from '../pages/StarShipPage.js';
import { thisExpression } from '@babel/types';

class App extends React.Componentt() {
  
    state ={
      starships:[]
    };

    getStarship = (idx) => {
      return this.state.starships[idx];
    }

    async componentDidMount() {
      const starships = await getAllStarShips();
      this.setState({ starships:starships.results });
    }
  render(){
  return (
    <div className="App">
      <header className="App-header">
      STAR WARS STARSHIPS
      </header>
    <Switch>
      <Route exact path='/' render ={()=> 
        <section>
          {this.state.starships.map((starship, idx) =>
      <Link 
      to={`/starships/${idx}`}
      key = {starship.name}
      >
          {starship.name}
      </Link>
          )}
          </section>
      }/>
      <Route path='/starships/:idx' render={(props) =>
      <StarShipPage
      {...props}
      getStarship={this.getStarship}
      />
    }/>
    </Switch>
      </div>
  );
  }
}

export default App;

import React from 'react';
import DogShelter from './DogShelter';
import Navbar from './Navbar';
import DogCard from './DogCard';
import './App.css';
import whiskey from './imgs/whiskey.jpg';
import hazel from './imgs/hazel.jpg';
import tubby from './imgs/tubby.jpg';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey loves eating popcorn.',
          'Whiskey is a terrible guard dog.',
          'Whiskey wants to cuddle with you!',
        ],
      },
      {
        name: 'Hazel',
        age: 3,
        src: hazel,
        facts: [
          'Hazel has soooo much energy!',
          'Hazel is highly intelligent.',
          'Hazel loves people more than dogs.',
        ],
      },
      {
        name: 'Tubby',
        age: 4,
        src: tubby,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise.',
          'Tubby loves eating food.',
        ],
      },
    ],
  };
  render () {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <DogShelter dogs={this.props.dogs} />}
          />
          <Route
            exact
            path="/dogs/:dogName"
            render={routeProps => <DogCard {...routeProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

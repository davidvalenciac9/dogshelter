import React, {Component} from 'react';
import './DogShelter.css';
import {NavLink} from 'react-router-dom';

export class DogShelter extends Component {
  componentDidMount () {
    document.title = 'Dog Shelter Homepage';
  }

  render () {
    let dogsButtons = this.props.dogs.map (d => {
      return (
        <div className="dogsButtons">
          <div className="dogsButtons-card">
            <NavLink className="dogButtons-Link" exact to={`/dogs/${d.name}`}>
              <img className="card-img-top" src={d.src} alt={d.name} /> <br />
              <span className="dogsButtons-title">{d.name}</span>
            </NavLink>
          </div>
        </div>
      );
    });
    return (
      <div className="DogShelter">
        <h1>Click a Dog</h1>
        {dogsButtons}
      </div>
    );
  }
}

export default DogShelter;

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

export class Navbar extends Component {
  render () {
    let {dogs} = this.props;
    let dogsList = dogs.map (d => {
      return (
        <li className="nav-item" key={uuidv4 ()}>
          <NavLink
            className="nav-link"
            exact
            activeClassName="active"
            to={`/dogs/${d.name}`}
          >
            {d.name}
          </NavLink>
        </li>
      );
    });
    return (
      <nav className="Navbar navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Dog Shelter</NavLink>

        {/****Button for mobile devices ****/}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li> */}
            {dogsList}
          </ul>

        </div>
      </nav>
    );
  }
}

export default Navbar;

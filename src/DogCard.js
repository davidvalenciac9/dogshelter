import React, {Component} from 'react';

export class DogCard extends Component {
  render () {
    const {dogName} = this.props.match.params;
    document.title = `Dog Shelter - ${dogName}`;
    return (
      <div>
        <h1>This is a Dog Card for {dogName}</h1>
      </div>
    );
  }
}

export default DogCard;

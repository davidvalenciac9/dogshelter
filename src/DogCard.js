import React, {Component} from 'react';
import './DogCard.css';

export class DogCard extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      age: null,
      src: null,
      facts: [],
    };
  }
  componentDidMount () {
    this.props.dogs.map (dog => {
      if (dog.name === this.props.match.params.dogName) {
        this.setState ({
          name: dog.name,
          age: dog.age,
          src: dog.src,
          facts: dog.facts,
        });
      }
    });
  }

  /*   componentDidMount () {
    console.log ('component did mount');
    this.setState ({
      name: this.props.dogs.map (dog => {
        return dog.name === this.props.match.params.dogName ? dog.name : '';
      }),
    });
  } */

  componentWillUnmount () {
    console.log ('component unmount');
  }

  render () {
    /*  const {dogName} = this.props.match.params; */
    document.title = `Dog Shelter - `;
    /* console.log (this.props.dogs); */
    return (
      <div className="DogCard container">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-10 col-lg-6">
            <div className="card">
              <img src={this.state.src} className="card-img-top" alt="dog" />
              <div className="card-body">
                <h1>{this.state.name}</h1>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.state.age} Years Old
                </h6>
                {this.state.facts.map (fact => {
                  return <p className="card-text">{fact}</p>;
                })}
                <button onClick={this.props.history.goBack}>Go Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogCard;

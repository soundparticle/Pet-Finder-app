import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailView extends Component {

  static propTypes = {
    pet: PropTypes.object
  };

  render() {
    const { pet } = this.props;

    return (

      <div key={pet._id}>
        <ul>
          <li>
            <h1>{pet.name}</h1>
          </li>

          <li>
            <h3>species:</h3>
            <p>{pet.species}</p>
          </li>

          <li>
            <h3>Breed:</h3>
            {
              pet.species === 'cat'
                ?
                pet.catBreed
                :
                pet.dogBreed
            }
          </li>

          <li>
            <h3>Size:</h3>
            <p>{pet.size}</p>
          </li>

          <li>
            <h3>Sex:</h3>
            <p>{pet.sex}</p>
          </li>

          <li>
            <h3>Age:</h3>
            <p>{pet.age}</p>
          </li>
      
          <li>
            <h3>Required Activity Level:</h3>
            <p>{pet.activityLevel}</p>
          </li>

          <li>
            <h3>Good With Children:</h3>
            <p>{pet.KidFriendly}</p>
          </li>

          <li>
            <h3>Good With Other Pets:</h3>
            <p>{pet.petFriendly}</p>
          </li>

          <li>
            <h3>Animal Description:</h3>
            <p>{pet.description}</p>
          </li>
          <li>
            <h3>Notes on Health and Behavior:</h3>
            <p>{pet.healthBehavior}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default DetailView;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addFavorite from './actionsFavorites';
import FavoriteButton from '../controls/FavoriteButton';
import { connect } from 'react-redux'; 
// ??? import { getSeeker } from './reducers';
// ??? import { getPet } from '../pets/reducersPets';

class DetailView extends Component {

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    seeker: PropTypes.object,
    pet: PropTypes.object,
    addFavorite: PropTypes.func.isRequired
  }

  render() {
    const { pet, addFavorite } = this.props;
    //const { pet } = this.pet  ???

    return (

      <div key={pet._id}>

        <li>
          <h1>{pet.name}</h1>
        </li>
        
        {/* IMAGE HERE */}
        
        <FavoriteButton 
          onComplete={addFavorite}
          pet={pet}
        />

        <li>
          <h3>species:</h3>
          <p>{pet.species}</p>
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

      </div>
    );
  }
}

export default connect(
  null,
  { addFavorite }
)(DetailView);
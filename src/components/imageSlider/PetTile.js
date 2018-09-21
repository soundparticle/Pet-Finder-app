import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WantButton from '../controls/WantButton';
import styles from './PetTile.css';
import PetDetailView from '../pets/PetDetailView';

class PetTile extends Component {

  static propTypes = {
    pet: PropTypes.object,
    addWant: PropTypes.func.isRequired
  }

  render() { 
    const { pet, addWant } = this.props;

    return (
      <div className={styles.petTile} key={pet._id}>
        <hgroup>
          <h3>Name: {pet.name}</h3>
          <h4>Breed: {pet.catBreed ? pet.catBreed : pet.dogBreed}</h4>
        </hgroup>
        <img src={pet.images}></img>

        <section className="buttons">
          <WantButton 
            onComplete={addWant}
            pet={pet}
          />
        </section>
        
        <section>
          <PetDetailView
            key={pet._id} 
            pet={pet}    
          />
        </section>
        
      </div>
    );
  }
}
 
export default PetTile;
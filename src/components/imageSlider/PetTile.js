import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from '../controls/FavoriteButton';
import WantButton from '../controls/WantButton';
import PetDetailView from '../pets/PetDetailView';
class PetTile extends Component {

  static propTypes = {
    pet: PropTypes.object,
    addFavorite: PropTypes.func.isRequired,
    addWant: PropTypes.func.isRequired
  }

  render() { 
    const { pet, addWant, addFavorite } = this.props;

    return (
      <div className='petTile' key={pet._id}>
        <header>
          <h3>{pet.name}</h3>
        </header>
        <img src={pet.images}></img>

        <section className='buttons'>
          <FavoriteButton 
            onComplete={addFavorite}
            pet={pet}
          />
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
        
        <section>
          <p>Description a loa;sdhgl;ajshdg</p>
        </section>
      </div>
    );
  }
}
 
export default PetTile;
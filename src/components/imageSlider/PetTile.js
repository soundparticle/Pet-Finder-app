import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from '../controls/FavoriteButton';
import WantButton from '../controls/WantButton';
import styles from './PetTile.css';

class PetTile extends Component {

  static propTypes = {
    pet: PropTypes.object,
    addFavorite: PropTypes.func.isRequired,
    addWant: PropTypes.func.isRequired
  }

  render() { 
    const { pet, addWant, addFavorite } = this.props;

    return (
      <div className={styles.petTile} key={pet._id}>
        <hgroup>
          <h3>{pet.name}</h3>
          <h4>{pet.catBreed ? pet.catBreed : pet.dogBreed}</h4>
        </hgroup>
        <img src={pet.images}></img>

        <section className="buttons">
          <FavoriteButton 
            onComplete={addFavorite}
            pet={pet}
          />
          <WantButton 
            onComplete={addWant}
            pet={pet}
          />
        </section>

        {/* <section className="description">
          <p>Description a loa;sdhgl;ajshdg ;lashdglha;s dg l;ajhsdgjhas;djg ajshdg ajshdg;l a;lsdgh asd ;alksdg lahsd;lgha;sdhg;ahsd;gh a;sd g</p>
        </section> */}
      </div>
    );
  }
}
 
export default PetTile;
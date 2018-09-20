import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from '../pets/actions';
import { loadPet } from '../pets/actionsPets';
import { getSeeker } from '../pets/reducers';
import { getPets } from '../pets/reducersPets';
import FavPetItem from '../pets/FavPetItem';

class Favorites extends Component {

  state = {
    favPets: []
  }

  static propTypes = {
    favorites: PropTypes.array,
    load: PropTypes.func.isRequired,
    loadPet: PropTypes.func.isRequired,
    pets: PropTypes.array
  }

  componentDidMount() { 
    this.setState({ favPets: this.props.pets.filter(pet => this.props.favorites.some(id => pet._id === id)) });
  }
  
  render() { 

    const { favorites } = this.props;
    const { favPets } = this.state;
    return ( 
      <section>
        <h3>Favorites Component</h3>
        {favorites && <ul>
          {favPets.map(favorite => {
            return <FavPetItem key={favorite._id} fav={favorite}/>;
          })}
        </ul>
        }
      </section>
    );
  }
}
 
export default connect(
  state => ({
    favorites: getSeeker(state).favorites,
    pets: getPets(state)
  }),
  { load, loadPet }
)(Favorites);
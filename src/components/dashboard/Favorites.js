import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadFavorites } from '../pets/actionsFavorites';
import { getFavorites } from '../pets/reducersFavorites';
import PetItem from '../pets/PetItem';

class Favorites extends Component {

  static propTypes = {
    favorites: PropTypes.array,
    loadFavorites: PropTypes.func.isRequired
  }

  // componentDidMount() {
  //   this.props.loadFavorites();
  // }
  
  render() { 

    const { favorites } = this.props;
    return ( 
      <section>
        <h3>Favorites Component</h3>
        {favorites && <ul>
          {favorites.map(favorite => {
            return <PetItem key={favorite.id} pet={favorite}/>;
          })}
        </ul>
        }
      </section>
    );
  }
}
 
export default connect(
  state => ({
    favorites: getFavorites(state)
  }),
  { loadFavorites }
)(Favorites);
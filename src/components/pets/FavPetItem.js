import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FavPetDisplay from './FavPetDisplay';
import FavoriteButton from '../controls/FavoriteButton';

class FavPetItem extends Component {

  static propTypes = {
    fav: PropTypes.object.isRequired
  }

  render() { 

    const { fav } = this.props;
    return (
      <li>
        <FavPetDisplay fav={fav}/>
        <FavoriteButton/>
      </li>
    );
  }
}
 
export default FavPetItem;
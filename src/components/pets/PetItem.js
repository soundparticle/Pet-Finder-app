import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PetDisplay from './PetDisplay';
import FavoriteButton from '../controls/FavoriteButton';

class PetItem extends Component {

  static propTypes = {
    pet: PropTypes.object.isRequired
  }

  render() { 

    const { pet } = this.props;
    return (
      <li>
        <PetDisplay pet={pet}/>
        <FavoriteButton/>
      </li>
    );
  }
}
 
export default PetItem;
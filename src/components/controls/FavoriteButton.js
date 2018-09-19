import React, { Component } from 'react';
import { addFavorite } from '../pets/actionsFavorites';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { getSeeker } from '../pets/actions';

class FavoriteButton extends Component {
  
  static propTypes = {
    addFavorite: PropTypes.func.isRequired
  }

  render() { 
    this.props.addFavorite();
    

    return (
      <div>
        <button onClick={addFavorite}>favorite</button>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    seeker: getSeeker(state)
  }), 
  { addFavorite }
)(FavoriteButton);
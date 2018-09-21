import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FavoriteButton extends Component {

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    pet: PropTypes.object,
  }

  handleSubmit = () => {
    const { pet } = this.props;
    this.props.onComplete({ id: pet._id });
  }
  render() { 

    return (
      <div>
        <button onClick={this.handleSubmit}>Favorite</button>
      </div>
    );
  }
}
 
export default FavoriteButton;
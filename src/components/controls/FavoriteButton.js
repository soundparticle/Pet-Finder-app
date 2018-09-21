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
        <i 
          className="far fa-star" 
          onClick={this.handleSubmit}>
        </i>
      </div>
    );
  }
}
 
export default FavoriteButton;
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class WantButton extends Component {

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
      <i onClick={this.handleSubmit} 
        className="far fa-bell">
      </i>
    );
  }
}
 
export default WantButton;
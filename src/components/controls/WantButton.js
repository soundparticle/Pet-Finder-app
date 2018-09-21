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
      <button onClick={this.handleSubmit}>Want</button>
    );
  }
}
 
export default WantButton;
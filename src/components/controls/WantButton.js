import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addMatch } from '../pets/actions';
import { putMatch } from '../../services/api';

class WantButton extends Component {

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    pet: PropTypes.object,
    addMatch: PropTypes.func
  }

  handleSubmit = () => {
    const { pet } = this.props;
    this.props.onComplete({ id: pet._id });
    putMatch(pet._id);
  }
  render() { 
    return (
      <i onClick={this.handleSubmit} 
        className="fas fa-bell">
      </i>
    );
  }
}
 
export default WantButton;
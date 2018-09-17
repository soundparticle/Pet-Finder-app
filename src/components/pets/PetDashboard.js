import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signupSeeker } from './actions';
import { getSeeker } from './reducers';

class PetDashboard extends Component {

  static propTypes = {
    seeker: PropTypes.object
  }

  render() { 
    const { seeker } = this.props;

    return ( 
      <div>
        <h2>Pet Dashboard</h2>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    seeker: getSeeker(state)
  }),
  { signupSeeker } 
)(PetDashboard);
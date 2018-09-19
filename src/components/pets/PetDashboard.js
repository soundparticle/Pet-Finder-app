import React, { Component } from 'react';
import PetSeeker from '../forms/PetSeeker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeeker } from './reducers';
import { addSeeker } from './actions';

class PetDashboard extends Component {

  static propTypes = {
    addSeeker: PropTypes.func.isRequired
  }

  render() { 
    const { addSeeker } = this.props;
    
    return ( 
      <div>
      
        <section>
          <h2>Pet Dashboard</h2>
          <h3>Interested in:</h3>
          <ul>
            Pet list here
          </ul>
        </section>
        
        <PetSeeker onComplete={addSeeker}/>
  
      </div>
    );
  }
}
 
export default connect(
  state => ({
    categories: getSeeker(state)
  }),
  { addSeeker }
)(PetDashboard);
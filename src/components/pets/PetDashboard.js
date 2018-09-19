import React, { Component } from 'react';
import { seekerDetails } from './actions';
import { getSeeker } from './reducers';
import PetSeeker from '../forms/PetSeeker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { data } from '../../mock-data/mock-data';

class PetDashboard extends Component {

  static propTypes = {
    seeker: PropTypes.object,
    loadInterested: PropTypes.func.isRequired,
    loadFavorites: PropTypes.func.isRequired,
    pets: PropTypes.array
  }

  // componentDidMount() {
  //   this.props.loadInterested();
  //   this.props.loadFavorites();
  // }

  render() { 
    const { seeker } = this.props;
    
    return ( 
      <div>
        { seeker
          ?
          <section>
            <h2>Pet Dashboard</h2>
            <h3>Interested in:</h3>
            <ul>
              Pet list here
            </ul>
          </section>
          :
          <PetSeeker/>//Form component
        }
      </div>
    );
  }
}
 
export default connect(
  state => ({ 
    seeker: getSeeker(state)
  }),
  { seekerDetails }
)(PetDashboard);
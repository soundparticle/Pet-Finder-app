import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInterested, getFavorites } from './reducers';
import { loadInterested, loadFavorites } from './actions';
// import { data } from '../../mock-data/mock-data';

class PetDashboard extends Component {

  static propTypes = {
    loadInterested: PropTypes.func.isRequired,
    loadFavorites: PropTypes.func.isRequired,
    pets: PropTypes.array
  };

  componentDidMount() {
    this.props.loadInterested();
    this.props.loadFavorites();
  }
  render() { 
    const { pets } = this.props;
    return ( 
      <div>
        <h2>Pet Dashboard</h2>
        <h3>Interested in:</h3>
        <ul>
          Pet list here
        </ul>
      </div>
    );
  }
}
 
export default connect(
  state => ({ 
    pets: getInterested(state), 
    favPets: getFavorites(state)
  }),
  { loadInterested }
)(PetDashboard);
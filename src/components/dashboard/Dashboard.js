import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeeker } from '../pets/reducers';
import { getPetsByOwner } from '../pets/reducersPets';
import { loadPetsByOwner } from '../pets/actionsPets';
import Matches from './Matches';

class Dashboard extends Component {

  static propTypes = {
    seeker: PropTypes.object,
    petsByOwner: PropTypes.array,
    loadPetsByOwner: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadPetsByOwner();
  }
  
  render() {
    const { petsByOwner } = this.props; 

    return ( 
      <div>
        {petsByOwner &&
          <ul>
            {petsByOwner.map(pet => (
              <Matches 
                key={pet._id}
                pet={pet}
              />
            ))}
          </ul>
        }
      </div>
    );
  }
}
 
export default connect(
  state => ({
    seeker: getSeeker(state),
    petsByOwner: getPetsByOwner(state)
  }),
  { loadPetsByOwner }
)(Dashboard);
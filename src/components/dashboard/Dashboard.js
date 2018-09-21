import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeeker } from '../pets/reducers';
import { loadPetsByOwner } from '../pets/actionsPets';
import { getPetsByOwner } from '../pets/reducersPets';
import Matches from './Matches';
import styles from './Dashboard.css';

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
      <div className={styles.dashboard}>
        <h3 className="header">Pets listed</h3>
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeeker } from '../pets/reducers';
import { load } from '../pets/actions';
import { loadPets } from '../pets/actionsPets';
import ImageSlider from '../imageSlider/Slider';
import { getPets } from '../pets/reducersPets';
import Favorites from './Favorites';
import Wants from './Wants';
import Matches from './Matches';

class Dashboard extends Component {

  static propTypes = {
    seeker: PropTypes.object,
    pets: PropTypes.array,
    load: PropTypes.func.isRequired,
    loadPets: PropTypes.func.isRequired
  }
  
  render() { 

    const { seeker, pets } = this.props;

    return ( 
      <div>
        <h3>Dashboard</h3>
        {seeker
          ?  
          <section>
            <Favorites />
            <Wants />
            <section>
              <ImageSlider pets={pets}/>
            </section>
          </section>
          :
          <section>
            <h2>Owner dashboard</h2>
            <Matches/>
          </section>
        }
      </div>
    );
  }
}
 
export default connect(
  state => ({
    seeker: getSeeker(state),
    pets: getPets(state)
  }),
  { load, loadPets }
)(Dashboard);
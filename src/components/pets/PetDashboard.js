import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeeker } from './reducers';
import { addSeeker, load } from './actions';
import { loadPets } from './actionsPets';
import PetSeeker from '../forms/PetSeeker';
import PetFilter from '../forms/PetFilter';
import ImageSlider from '../imageSlider/Slider';
import { getPets } from './reducersPets';

class PetDashboard extends Component {


  static propTypes = {
    seeker: PropTypes.array,
    pets: PropTypes.array,
    load: PropTypes.func.isRequired,
    addSeeker: PropTypes.func.isRequired,
    loadPets: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.load();
    this.props.loadPets();
  }

  render() { 

    const { addSeeker, seeker, pets } = this.props;
    
    return ( 
      <div>
        {seeker.length < 1 &&
          <section>
            <PetSeeker onComplete={addSeeker}/>
          </section>
        }

        <h3>{pets.name}</h3>
        <section>
          <ImageSlider pets={pets}/>
        </section>

        <aside>
          <PetFilter />
        </aside>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    seeker: getSeeker(state),
    pets: getPets(state)
  }),
  { load, addSeeker, loadPets }

)(PetDashboard);
import React, { Component } from 'react';
import PetSeeker from '../forms/PetSeeker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeeker } from './reducers';
import { addSeeker, load } from './actions';

class PetDashboard extends Component {


  static propTypes = {
    seeker: PropTypes.array,
    load: PropTypes.func.isRequired,
    addSeeker: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.load();
  }

  render() { 
    const { addSeeker, seeker } = this.props;
    
    return ( 
      <div>
        {seeker.length < 1 &&
          <section>
            <PetSeeker onComplete={addSeeker}/>
          </section>
        }
        
        <section>
          <h2>Pet Dashboard</h2>
          <ul>
            Pet list here
          </ul>
        </section>

      </div>
    );
  }
}
 
export default connect(
  state => ({
    seeker: getSeeker(state)
  }),
  { load, addSeeker }
)(PetDashboard);
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeeker } from './reducers';
import { addSeeker, load } from './actions';
import { loadPets } from './actionsPets';
import PetSeeker from '../forms/PetSeeker';
import PetFilter from '../forms/PetFilter';
import ImageSlider from '../imageSlider/Slider';
import { getPets } from './reducersPets';
import { filterPets } from '../pets/actionsPets';
import styles from './PetDashboard.css';

// const USER_NAME = 'dsdmwoefe';
// const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;
// const options = 'w_300';

// export const getUrl = (url, options = '') => {
//   return `${FETCH_URL}/${options}${encodeURIComponent(url)}`;
// };

class PetDashboard extends Component {

  state = {
    filter: false
  }
  
  static propTypes = {
    seeker: PropTypes.object,
    pets: PropTypes.array,
    load: PropTypes.func.isRequired,
    addSeeker: PropTypes.func.isRequired,
    loadPets: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.load();
    this.props.loadPets();
  }

  handleFilter = () => {
    const { filter } = this.state;
    this.setState({ filter: !filter });
  }

  render() { 
    const { filter } = this.state;
    const { addSeeker, seeker, pets } = this.props;
    
    return ( 
      <div className={styles.petDashboard}>
        {!seeker
          ? <section>
            <PetSeeker className="active" onComplete={addSeeker}/>
          </section> 

          : <Fragment>
            <button onClick={this.handleFilter}>Filter search</button>
            {filter &&
              <section className="filter">
                <PetFilter onComplete={filterPets}/>
              </section>
            }
            <ImageSlider className="active" pets={pets}/>
          </Fragment>
               
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
  { load, addSeeker, loadPets }

)(PetDashboard);
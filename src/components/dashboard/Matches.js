import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { load } from '../pets/actions';
import { loadPetsByOwner } from '../pets/actionsPets';
import { getPetsByOwner } from '../pets/reducersPets';
// import { getSeeker } from '../pets/reducers';
// import { getPets } from '../pets/reducersPets';
// import MatchItem from './MatchItem';
import { getPetMatches } from '../../services/api';

class Matches extends Component {

  state = {
    matches: null
  }

  static propTypes = {
    interested: PropTypes.array,
    load: PropTypes.func,
    loadPetsByOwner: PropTypes.func,
    pet: PropTypes.object
  }

  componentDidMount() {
    // const { matchedSeekers } = this.state;
    this.props.loadPetsByOwner();
    this.setState({ matches: getPetMatches(this.props.pet) });
    // console.log(this.props.interested);
    // if(matchedSeekers.length < 1) return;
    // this.setState({ matchedSeekers: this.props.interested
    //   .map(i => )
    // });
  }

  render() { 
    const { pet } = this.props;
    const { matches } = this.state;
    // const { interested } = this.props;
    // const { matchedSeekers } = this.state;

    return (
      <div>
        <h3>Matches Component</h3>
        <li>
          <h3>{pet.name}</h3>
  
        </li>
        {/* <section>
          {matches &&
            matches.map(match => (
              <Fragment key={match.id}>
                <p>{match.name}</p>
                <p>{match.email}</p>
              </Fragment>
            ))}
        </section> */}
      </div>
    );
  }
}
 
export default connect(
  state => ({
    petsByOwner: getPetsByOwner(state)
  }),
  { loadPetsByOwner }
)(Matches);

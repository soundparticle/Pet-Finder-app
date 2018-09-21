import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from '../pets/actions';
import { loadPet } from '../pets/actionsPets';
import { getSeeker } from '../pets/reducers';
import { getPets } from '../pets/reducersPets';
import MatchItem from '../pets/MatchItem';

class Matches extends Component {

  state = {
    matchedSeekers: []
  }

  static propTypes = {
    interested: PropTypes.array,
    load: PropTypes.func.isRequired,
    loadPet: PropTypes.func.isRequired,
    pets: PropTypes.array
  }

  componentDidMount() {
    const { matchedSeekers } = this.state;
    console.log(this.props.loadPet());
    console.log(this.props.interested);
    // if(matchedSeekers.length < 1) return;
    // this.setState({ matchedSeekers: this.props.interested
    //   .map(i => )
    // });
  }

  render() { 

    const { interested } = this.props;
    const { matchedSeekers } = this.state;

    return (
      <section>
        <h3>Matches Component</h3>
        {interested && <ul>
          {matchedSeekers.map(match => {
            return <MatchItem key={match._id} matched={match}/>;
          })}
        </ul>
        }
      </section>
    );
  }
}
 
export default connect(
  state => ({
    interested: getPets(state)
  }),
  { loadPet }
)(Matches);

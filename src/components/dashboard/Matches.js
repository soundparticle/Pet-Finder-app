import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMatches } from './reducers';
import { loadMatches } from './actions';
import MatchInfo from './MatchInfo';

class Matches extends Component {

  static propTypes = {
    pet: PropTypes.object,
    matches: PropTypes.array,
    loadMatches: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { pet } = this.props;
    this.props.loadMatches(pet);
  }

  render() { 
    const { pet, matches } = this.props;
    
    return (
      <div>
        <h3>Matches Component</h3>
        <li>
          <h3>{pet.name}</h3>
        </li>

        {matches &&
        <ul>
          {matches.map(match => (
            <MatchInfo 
              key={match._id}
              match={match}
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
    matches: getMatches(state)
  }),
  { loadMatches }
)(Matches);

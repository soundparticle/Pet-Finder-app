import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMatches } from './reducers';
import { loadMatches } from './actions';
import MatchInfo from './MatchInfo';
import styles from './Matches.css';

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
      <div className={styles.matches}>
        <h3 className="header">Pet: {pet.name}</h3>
        <section>
          <h5>Matches</h5>
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
        </section>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MatchInfo extends Component {
  
  static propTypes = {
    match: PropTypes.object
  }

  render() { 
    const { match } = this.props;
    return (
      <li>
        <p>{match.name}</p>
        <p>{match.email}</p>
      </li>
    );
  }
}
 
export default MatchInfo;
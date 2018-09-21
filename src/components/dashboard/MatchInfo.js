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
        <p>Name: {match.name}</p>
        <p>Email: {match.email}</p>
      </li>
    );
  }
}
 
export default MatchInfo;
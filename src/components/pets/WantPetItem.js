import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WantPetDisplay from './WantPetDisplay';
import WantButton from '../controls/WantButton';

class WantPetItem extends Component {

  static propTypes = {
    want: PropTypes.object.isRequired
  }

  render() {

    const { want } = this.props;
    return (
      <li>
        <WantPetDisplay want={want}/>
        <WantButton/>
      </li>
    );
  }
}

export default WantPetItem;
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class PetDisplay extends PureComponent {

  static propTypes = {
    pet: PropTypes.object.isRequired
  }
  render() { 

    const { pet } = this.props;
    return (
      <Fragment>
        <h3>{pet.name}</h3>
        <p>Sex: {pet.sex}</p>
        <p>age: {pet.age}</p>
      </Fragment>
    );
  }
}
 
export default PetDisplay;
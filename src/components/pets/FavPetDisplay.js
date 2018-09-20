import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class FavPetDisplay extends PureComponent {

  static propTypes = {
    fav: PropTypes.object.isRequired
  }
  render() { 

    const { fav } = this.props;
    return (
      <Fragment>
        <h3>{fav.name}</h3>
        <p>Sex: {fav.sex}</p>
        <p>age: {fav.age}</p>
      </Fragment>
    );
  }
}
 
export default FavPetDisplay;
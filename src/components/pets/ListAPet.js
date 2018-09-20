import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPet } from './actionsPets';
import PostPet from '../forms/PostPet';


class ListAPet extends Component {

  static propTypes = {
    addPet: PropTypes.func.isRequired
  }

  render() { 

    const { addPet } = this.props;

    return (
      <div>
        <PostPet onComplete={addPet}/>
      </div>
    );
  }
}
 
export default connect(
  null,
  { addPet }
)(ListAPet);
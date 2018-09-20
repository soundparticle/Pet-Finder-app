import React, { Component } from 'react';
import PostForm from '../forms/PostForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPet } from './actionsPets';

class ListAPet extends Component {

  static propTypes = {
    addPet: PropTypes.func.isRequired
  }

  render() { 

    const { addPet } = this.props;

    return (
      <div>
        <PostForm onComplete={addPet}/>
      </div>
    );
  }
}

export default connect(
  null,
  { addPet }
)(ListAPet);
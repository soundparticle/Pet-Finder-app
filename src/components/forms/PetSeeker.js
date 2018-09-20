import React, { Component } from 'react';
import styles from './PetSeeker.css';
import PropTypes from 'prop-types';

class PetSeeker extends Component {

  state = {
    kids: '',
    activity: '',
    otherPets: ''
  }

  static propTypes = {
    onComplete: PropTypes.func.isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      kids: this.state.kids,
      activity: this.state.activity,
      otherPets: this.state.otherPets,
      interested: [],
      favorites: []
    });
  }
  
  render() {

    const { kids, activity, otherPets } = this.state;

    return (
      <div className={styles.petSeeker}>
        <h2>Form for pet seekers</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Do you have children?:
          </label>
          <select name="kids" value={kids} onChange={this.handleChange}>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
       
          <label>
            Activity level:
          </label>
          <select name="activity" value={activity} onChange={this.handleChange}>
            <option value="" disabled>Select an option</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
         
          <label>
           Do you own other pets?:
          </label>
          <select name="otherPets" value={otherPets} onChange={this.handleChange}>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button>Submit</button>
        </form>
      </div>

    );
  }
}
 
export default PetSeeker;
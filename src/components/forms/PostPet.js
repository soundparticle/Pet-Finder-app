import React, { Component } from 'react';
import styles from './PostPet.css';
import PropTypes from 'prop-types';

class PostPet extends Component {

  state = {
    reason: '',
    name: '',
    species: '',
    breedCat: 'Unknown',
    breedDog: 'Unknown',
    size: '',
    sex: '',
    age: '',
    sterilized: 'Unknown',
    children: '',
    petFriendly: 'Unknown',
    activityLevel: '',
    description: '',
    healthBehavior: '',
    photo: ''
  }

  static propTypes = {
    onComplete: PropTypes.func.isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    const { 
      zip, 
      rehome,
      name, 
      species, 
      breedCat, 
      breedDog,
      size, 
      sex, 
      age, 
      sterilized, 
      children, 
      petFriendly, 
      activityLevel, 
      description, 
      healthBehavior, 
      photo 
    } = this.state;
    event.preventDefault();

    this.props.onComplete({
      zip: zip,
      rehome: rehome,
      name: name,
      species: species,
      breedCat: breedCat,
      breedDog: breedDog,
      size: size,
      sex: sex,
      age: age,
      sterilized: sterilized,
      children: children,
      petFriendly: petFriendly,
      activityLevel: activityLevel,
      description: description,
      healthBehavior: healthBehavior,
      photo: photo

    });
  }

  render() { 
    const { 
      reason,
      name, 
      species, 
      breedCat, 
      breedDog,
      size, 
      sex, 
      age, 
      sterilized, 
      children, 
      petFriendly, 
      activityLevel, 
      description, 
      healthBehavior, 
      photo 
    } = this.state;
  

    return (
      <div className={styles.PostPet}>
        <h2>Form to post a pet</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Reason for rehoming:</h3>
            <p>In order to find the perfect home for your pet, please fill out all fields.</p>
            <select name="reason" value={reason} onChange={this.handleChange}>
              <option value="None">None</option>
              <option value="Allergy">Allergy</option>
              <option value="Death">Death</option>
              <option value="Illness">Illness</option>
              <option value="Moving">Moving</option>
              <option value="Conflict">Conflict</option>
            </select>
          </label>
          <label>
            <h3>Name:</h3>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label>
            <h3>Animal:</h3>
            <select name="species" value={species} onChange={this.handleChange}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
          <label>
            <h3>Breed:</h3>
            <select name="breedCat" value={breedCat} onChange={this.handleChange}>
              <option value="Unknown">Unknown</option>
            </select>
            <select name="breedDog" value={breedDog} onChange={this.handleChange}>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            <h3>Size:</h3>
            <select name="size" value={size} onChange={this.handleChange}>
              <option value="Extra Small">X-Small</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">X-Large</option>
            </select>
          </label>
          <label>
            <h3>Sex:</h3>
            <select name="sex" value={sex} onChange={this.handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            <h3>Age:</h3> 
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="Baby">Baby</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
              <option value="Unknown">Don&#39;t know</option>
            </select>
          </label>
          <label>
            <h3>Sterilized: </h3>
            <select name="sterilized" value={sterilized} onChange={this.handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Don&#39;t know</option>
            </select>
          </label>
          <label>
            <h3>Plays well with children:</h3>
            <select name="children" value={children} onChange={this.handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Don&#39;t know</option>
            </select>
          </label>
          <label>
            <h3>Plays well with other pets:</h3>
            <select name="petFriendly" value={petFriendly} onChange={this.handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Don&#39;t know</option>
            </select>
          </label>
          <label>
            <h3>Activity level required:</h3> 
            <select name="activityLevel" value={activityLevel} onChange={this.handleChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
            <h3>Description: </h3>
            <textarea name="description" value={description} onChange={this.handleChange}></textarea>
          </label>
          <label>
            <h3>Health/behavior: </h3>
            <textarea name="healthBehavior" value={healthBehavior} onChange={this.handleChange}></textarea>
          </label>
          <label>
            <h3>Upload Photo:</h3>
            <input name="photo" value={photo} onChange={this.handleChange} />
          </label>

          <button>rehome</button>
        </form>
      </div>
    );
  }
}
 
export default PostPet;
import React, { Component } from 'react';
import styles from './PostPet.css';

class PostPet extends Component {

  render() { 
    return (
      <div className={styles.PostPet}>
        <h2>Form to post a pet</h2>
        <form>
          <label>
            <h3>Reason for rehoming:</h3>
            <select>
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
            <input type="text" name="name"/>
          </label>
          <label>
            <h3>Animal</h3>
            <select>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
          <label>
            <h3>Breed:</h3>
            <select>
              <option value="Bulldog">Bull dog</option>
            </select>
          </label>
          <label>
            <h3>Size:</h3>
            <select>
              <option value="Extra Small">X-Small</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">X-Large</option>
            </select>
          </label>
          <label>
            <h3>Sex:</h3>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            <h3>Age:</h3> 
            <select>
              <option value="Baby">Baby</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            <h3>Sterilized: </h3>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            <h3>Kid friendly?:</h3>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            <h3>Plays well with other pets?:</h3>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            <h3>Activity level required:</h3> 
            <select>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
            <h3>Description: </h3>
            <textarea name="description"></textarea>
          </label>
          <label>
            <h3>Health/behavior: </h3>
            <textarea name="health-behavior"></textarea>
          </label>
          <label>
            <h3>Upload Photo:</h3>
            <input/>
          </label>
        </form>
      </div>
    );
  }
}
 
export default PostPet;
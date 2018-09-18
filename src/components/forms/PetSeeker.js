import React, { Component } from 'react';
import styles from './PetSeeker.css';

class PetSeeker extends Component {
  
  render() { 

    return (
      <div className={styles.petSeeker}>
        <h2>Form for pet seekers</h2>
        <form>
          <label>
            Do you have children?:
          </label>
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
       
          <label>
            Activity level:
          </label>
          <select>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
         
          <label>
           Do you own other pets?:
          </label>
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <button>Submit</button>
        </form>
      </div>

    );
  }
}
 
export default PetSeeker;
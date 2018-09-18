import React, { Component } from 'react';

class PetSeeker extends Component {
  
  render() { 

    return (
      <div>
        <h2>Form for pet seekers</h2>
        <form>
          <label>
            Do you have children?:
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            Activity level:
            <select>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
          Do you own other pets?:
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </form>
      </div>

    );
  }
}
 
export default PetSeeker;
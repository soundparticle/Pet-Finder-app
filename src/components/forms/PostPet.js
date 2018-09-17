import React, { Component } from 'react';

class PostPet extends Component {

  render() { 
    return (
      <div>
        <h2>Form to post a pet</h2>
        <form>
          <label>
            Reason for rehoming: 
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
            Name:
            <input type="text" name="name"/>
          </label>
          <label>
            Animal:
            <select>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
          <label>
            Breed:
            <select>
              <option value="Bulldog">Bull dog</option>
            </select>
          </label>
          <label>
            Size:
            <select>
              <option value="Extra Small">X-Small</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">X-Large</option>
            </select>
          </label>
          <label>
            Sex:
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Age: 
            <select>
              <option value="Baby">Baby</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            Sterilized: 
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            Kid friendly?:
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            Plays well with other pets?:
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label>
            Activity level required: 
            <select>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
            Description: 
            <textarea name="description"></textarea>
          </label>
          <label>
            Health/behavior: 
            <textarea name="health-behavior"></textarea>
          </label>
          <label>
            Upload Photo:
            <input/>
          </label>
        </form>
      </div>
    );
  }
}
 
export default PostPet;
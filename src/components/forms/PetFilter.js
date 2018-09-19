import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class PetFilter extends Component {

  state = {
    animal: '',

  }

  static propTypes = {
    onFilter: PropTypes.func.isRequired
  }

  handleSubmit = event => {
    event.preventDefault();
    //this.props.onFilter(this.state);
  };

  state = { 
    filter: ''
  };

  render() { 
    return (
      <div>
        <h2>Narrow your search</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
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
              <option value="Dachshund">Dachshund</option>
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
            </select>
          </label>
          <label>
            <h3>Sterilized: </h3>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
 
export default PetFilter;

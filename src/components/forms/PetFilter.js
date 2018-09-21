import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterPets } from '../pets/actionsPets';
import PropTypes from 'prop-types';
import styles from './PetFilter.css';

class PetFilter extends Component {

  state = {
    zip: '',
    species: '',
    catBreed: '',
    dogBreed: '',
    size: '',
    sex: '',
    age: '',
    sterilized: '',
    kidFriendly: '',
    petFriendly: '',
    activityLevel: '',

  }

  static propTypes = {
    onComplete: PropTypes.func,
    filterPets: PropTypes.func
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const keys = Object.keys(this.state);
    let filter = '?';
  
    keys.forEach(key => this.state[key] !== '' ? filter += `&${key}=${this.state[key]}` : null);
    
    this.props.filterPets(filter);
    this.props.onComplete(filter);
  };

  render() { 
    const { 
      zip, 
      species, 
      catBreed, 
      dogBreed,
      size, 
      sex, 
      age, 
      sterilized, 
      kidFriendly, 
      petFriendly, 
      activityLevel,  
    } = this.state;

    return (
      <div>
        <h2>Narrow your search</h2>
        <form onSubmit={this.handleSubmit} className={styles.petFilter}>
          
          <label>
            <h3>Location (zip code):</h3>
            <input 
              type="text" name="zip" 
              value={zip} placeholder="zip code" 
              pattern="^\d{5}(?:[-\s]\d{4})?$" size="7" 
              minLength="5" 
              maxLength="5"
              onChange={this.handleChange}
            />
          </label>

          <label>
            <h3>Species</h3>
            <select 
              name="species" 
              value={species} 
              onChange={this.handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>

          <label>
            <h3>Breed:</h3>
            {species === 'cat'
              ?
              <select  
                name="catBreed" 
                value={catBreed} 
                onChange={this.handleChange}
              >
                <option value="" disabled>Select an option</option>
                <option value="domestic-shorthair">Domestic Shorthair</option>
                <option value="domestic-longhair">Domestic Longhair</option>
                <option value="abyssinian">Abyssinian</option>
                <option value="american-bobtail">American Bobtail</option>
                <option value="american-curl">American Curl</option>
                <option value="american-shorthair">American Shorthair</option>
                <option value="american-wirehair">American Wirehair</option>
                <option value="balinese">Balinese</option>
                <option value="bengal">Bengal</option>
                <option value="birman">Birman</option>
                <option value="bombay">Bombay</option>
                <option value="british-shorthair">British Shorthair</option>
                <option value="burmese">Burmese</option>
                <option value="burmilla">Burmilla</option>
                <option value="chartreux">Chartreux</option>
                <option value="colorpoint-shorthair">Colorpoint Shorthair</option>
                <option value="cornish-rex">Cornish Rex</option>
                <option value="devon-rex">Devon Rex</option>
                <option value="egyptian-mau">Egyptian Mau</option>
                <option value="european-burmese">European Burmese</option>
                <option value="exotic">Exotic</option>
                <option value="havana-brown">Havana Brown</option>
                <option value="japanese-bobtail">Japanese Bobtail</option>
                <option value="khao-manee">Khao Manee</option>
                <option value="korat">Korat</option>
                <option value="laPerm">LaPerm</option>
                <option value="lykoi">Lykoi</option>
                <option value="maine-coon-cat">Maine Coon Cat</option>
                <option value="manx">Manx</option>
                <option value="norwegian-forest-cat">Norwegian Forest Cat</option>
                <option value="ocicat">Ocicat</option>
                <option value="oriental">Oriental</option>
                <option value="persian">Persian</option>
                <option value="ragamuffin">Ragamuffin</option>
                <option value="ragdoll">Ragdoll</option>
                <option value="russian-blue">Russian Blue</option>
                <option value="scottish-fold">Scottish Fold</option>
                <option value="selkirk-rex">Selkirk Rex</option>
                <option value="siamese">Siamese</option>
                <option value="siberian">Siberian</option>
                <option value="singapura">Singapura</option>
                <option value="somali">Somali</option>
                <option value="sphynx">Sphynx</option>
                <option value="tonkinese">Tonkinese</option>
                <option value="turkish-angora">Turkish Angora</option>
                <option value="turkish-van">Turkish Van</option>
              </select>
              :
              <select 
                name="dogBreed" 
                value={dogBreed} 
                onChange={this.handleChange}
              >
                <option value="" disabled>Select an option</option>
                <option value="mixed-breed">Mixed-Breed</option>
                <option value="beagle">Beagle</option> 
                <option value="bernese-mountain-dog">Bernese Mountain Dog</option>
                <option value="border-collie">Border Collie</option>
                <option value="boxer">Boxer</option>
                <option value="brittany-spaniel">Brittany Spaniel</option>
                <option value="bulldog">Bulldog</option>
                <option value="cavalier-king-charles-spaniel">Cavalier King Charles Spaniel</option>
                <option value="chihuahua">Chihuahua</option>
                <option value="dachshund">Dachshund (all varieties)</option>
                <option value="dobermann">Dobermann</option>
                <option value="english-cocker-spaniel">English Cocker Spaniel</option>
                <option value="english-setter">English Setter</option>
                <option value="english-springer-spaniel">English Springer Spaniel</option>
                <option value="french-bulldog">French Bulldog</option>
                <option value="german-shepherd">German Shepherd</option>
                <option value="german-shorthaired-pointer">German Shorthaired Pointer</option>
                <option value="german-spitz">German Spitz</option>
                <option value="golden-retriever">Golden Retriever</option>
                <option value="great-dane">Great Dane</option>
                <option value="jack-russell-terrier">Jack Russell Terrier</option>
                <option value="labrador-retriever">Labrador Retriever</option>
                <option value="maltese">Maltese</option>
                <option value="miniature-schnauzer">Miniature Schnauzer</option>
                <option value="pomeranian">Pomeranian</option>
                <option value="poodle">Poodle</option>
                <option value="pug">Pug</option>
                <option value="rottweiler">Rottweiler</option>
                <option value="shetland-sheepdog">Shetland Sheepdog</option>
                <option value="shih-tzu">Shih Tzu</option>
                <option value="staffordshire-bull-terrier">Staffordshire Bull Terrier</option>
                <option value="west-highland-white-terrier">West Highland White Terrier</option>
                <option value="yorkshire-terrier">Yorkshire Terrier</option>

              </select>
            }
          </label>

          <label>
            <h3>Size:</h3>
            <select 
              name="size" 
              value={size} 
              onChange={this.handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="extra-small">X-Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">X-Large</option>
            </select>
          </label>

          <label>
            <h3>Sex:</h3>
            <select 
              name="sex" 
              value={sex} 
              onChange={this.handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="any">Female</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>

          <label>
            <h3>Age:</h3> 
            <select 
              name="age" value={age} 
              onChange={this.handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="baby">Baby</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </label>

          <label>
            <h3>Sterilized: </h3>
            <select 
              name="sterilized" 
              value={sterilized} 
              onChange={this.handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            <h3>Kid Friendly:</h3>
            <select 
              name="kidFriendly" 
              value={kidFriendly} 
              onChange={this.handleChange}
            >

              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            <h3>Pet Friendly:</h3>
            <select 
              name="petFriendly" 
              value={petFriendly} 
              onChange={this.handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            <h3>Activity Level:</h3>
            <select 
              name="activityLevel" 
              value={activityLevel} 
              onChange={this.handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>

            </select>
          </label>

          <button>Search</button>
        </form>
      </div>
    );
  }
}
 
export default connect(
  null,
  { filterPets }
)(PetFilter);

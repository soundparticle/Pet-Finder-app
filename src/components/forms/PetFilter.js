import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PetFilter extends Component {

  state = {
    zip: '',
    species: '',
    breedCat: '',
    breedDog: '',
    size: '',
    sex: '',
    age: '',
    sterilized: '',
    kidFriendly: '',
    petFriendly: '',
    activityLevel: '',
  }

  // state = { 
  //   filter: ''
  // };

  // static propTypes = {
  //   onFilter: PropTypes.func.isRequired
  // }

  static propTypes = {
    onComplete: PropTypes.func.isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    //this.props.onFilter(this.state);
    const { 
      zip,  
      species, 
      breedCat, 
      breedDog,
      size, 
      sex, 
      age, 
      sterilized, 
      kidFriendly, 
      petFriendly, 
      activityLevel, 
    } = this.state;
    event.preventDefault();
    //this.props.onFilter(this.state);
    

    this.props.onComplete({
      zip: zip,
      species: species,
      breedCat: breedCat,
      breedDog: breedDog,
      size: size,
      sex: sex,
      age: age,
      sterilized: sterilized,
      kidFriendly: kidFriendly,
      petFriendly: petFriendly,
      activityLevel: activityLevel
    });
  }

  render() { 
    const { 
      zip, 
      species, 
      breedCat, 
      breedDog,
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
        <form onSubmit={event => this.handleSubmit(event)}>
          
          <label>
            <h3>Location (zip code):</h3>
            <input type="text" name="zip" value={zip} placeholder="zip code" pattern="^\d{5}(?:[-\s]\d{4})?$" size="7" minLength="5" maxLength="5"/>
          </label>

          <label>
            <h3>Species</h3>
            <select name="species" value={species} onChange={this.handleChange}>
              <option value="any">Any</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>

          <label>
            <h3>Breed:</h3>
            <select name="breedCat" value={breedCat} onChange={this.handleChange}>
              <option value="Not Applicable">Not Applicable</option>
              <option value="Any">Not Applicable</option>
              <option value="Domestic Shorthair">Domestic Shorthair</option>
              <option value="Domestic Longhair">Domestic Longhair</option>
              <option value="Abyssinian">Abyssinian</option>
              <option value="American Bobtail">American Bobtail</option>
              <option value="American Curl">American Curl</option>
              <option value="American Shorthair">American Shorthair</option>
              <option value="American Wirehair">American Wirehair</option>
              <option value="Balinese">Balinese</option>
              <option value="Bengal">Bengal</option>
              <option value="Birman">Birman</option>
              <option value="Bombay">Bombay</option>
              <option value="British Shorthair">British Shorthair</option>
              <option value="Burmese">Burmese</option>
              <option value="Burmilla">Burmilla</option>
              <option value="Chartreux">Chartreux</option>
              <option value="Colorpoint Shorthair">Colorpoint Shorthair</option>
              <option value="Cornish Rex">Cornish Rex</option>
              <option value="Devon Rex">Devon Rex</option>
              <option value="Egyptian Mau">Egyptian Mau</option>
              <option value="European Burmese">European Burmese</option>
              <option value="Exotic">Exotic</option>
              <option value="Havana Brown">Havana Brown</option>
              <option value="Japanese Bobtail">Japanese Bobtail</option>
              <option value="Khao Manee">Khao Manee</option>
              <option value="Korat">Korat</option>
              <option value="LaPerm">LaPerm</option>
              <option value="Lykoi">Lykoi</option>
              <option value="Maine Coon Cat">Maine Coon Cat</option>
              <option value="Manx">Manx</option>
              <option value="Norwegian Forest Cat">Norwegian Forest Cat</option>
              <option value="Ocicat">Ocicat</option>
              <option value="Oriental">Oriental</option>
              <option value="Persian">Persian</option>
              <option value="Ragamuffin">Ragamuffin</option>
              <option value="Ragdoll">Ragdoll</option>
              <option value="Russian Blue">Russian Blue</option>
              <option value="Scottish Fold">Scottish Fold</option>
              <option value="Selkirk Rex">Selkirk Rex</option>
              <option value="Siamese">Siamese</option>
              <option value="Siberian">Siberian</option>
              <option value="Singapura">Singapura</option>
              <option value="Somali">Somali</option>
              <option value="Sphynx">Sphynx</option>
              <option value="Tonkinese">Tonkinese</option>
              <option value="Turkish Angora">Turkish Angora</option>
              <option value="Turkish Van">Turkish Van</option>
            </select>

            <select name="breedDog" value={breedDog} onChange={this.handleChange}>
              <option value="Not Applicable">Not Applicable</option>
              <option value="Any">Any</option>
              <option value="Beagle">Beagle</option> 
              <option value="Bernese Mountain Dog">Bernese Mountain Dog</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Boxer">Boxer</option>
              <option value="Brittany Spaniel">Brittany Spaniel</option>
              <option value="Bulldog">Bulldog</option>
              <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Dachshund (all varieties)">Dachshund (all varieties)</option>
              <option value="Dobermann">Dobermann</option>
              <option value="English Cocker Spaniel">English Cocker Spaniel</option>
              <option value="English Setter">English Setter</option>
              <option value="English Springer Spaniel">English Springer Spaniel</option>
              <option value="French Bulldog">French Bulldog</option>
              <option value="German Shepherd">German Shepherd</option>
              <option value="German Shorthaired Pointer">German Shorthaired Pointer</option>
              <option value="German Spitz">German Spitz</option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Great Dane">Great Dane</option>
              <option value="Jack Russell Terrier">Jack Russell Terrier</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="Maltese">Maltese</option>
              <option value="Miniature Schnauzer">Miniature Schnauzer</option>
              <option value="Pomeranian">Pomeranian</option>
              <option value="Poodle">Poodle</option>
              <option value="Pug">Pug</option>
              <option value="Rottweiler">Rottweiler</option>
              <option value="Shetland Sheepdog">Shetland Sheepdog</option>
              <option value="Shih Tzu">Shih Tzu</option>
              <option value="Staffordshire Bull Terrier">Staffordshire Bull Terrier</option>
              <option value="West Highland White Terrier">West Highland White Terrier</option>
              <option value="Yorkshire Terrier">Yorkshire Terrier</option>
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
              <option value="Any">Female</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>

          <label>
            <h3>Age:</h3> 
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="Baby">Baby</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </label>

          <label>
            <h3>Sterilized: </h3>
            <select name="sterilized" value={sterilized} onChange={this.handleChange}>
              <option value="Any">Any</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            <h3>Kid Friendly:</h3>
            <select name="kidFriendly" value={kidFriendly} onChange={this.handleChange}>
              <option value="Any">Any</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            <h3>Pet Friendly:</h3>
            <select name="petFriendly" value={petFriendly} onChange={this.handleChange}>
              <option value="Any">Any</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            <h3>Kid Friendly:</h3>
            <select name="activityLevel" value={activityLevel} onChange={this.handleChange}>
              <option value="Any">Any</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">Medium</option>
            </select>
          </label>

          <button>Search</button>
        </form>
      </div>
    );
  }
}
 
export default PetFilter;

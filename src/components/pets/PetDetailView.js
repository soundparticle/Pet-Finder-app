import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PetDetailView.css';
class PetDetailView extends Component {
  
  static propTypes = {
    pet: PropTypes.object
  };
  
  render() {
    const { pet } = this.props;

    return (
     
      <div className={styles.petDetail} >
        <ul>

          <li>
            <h1>{pet.name} the {pet.species}</h1>
          </li>

          <div className="properties">

            <li>
              <span className="category">Breed:  </span>
              <span className="value">   
                {
                  pet.species === 'cat'
                    ?
                    pet.catBreed
                    :
                    pet.dogBreed
                } </span> 
            </li>

            <li>
              <span className="category">Size:  </span>
              <span className="value">{pet.size}</span>
            </li>

            <li>
              <span className="category">Sex:  </span>
              <span className="value">{pet.sex}</span> 
            </li>

            <li>
              <span className="category">Age:  </span> 
              <span className="value">{pet.age}</span>
            </li>
      
            <li>
              <span className="category">Required Activity Level:  </span>
              <span className="value">{pet.activityLevel}</span>
            </li>

            <li>
              <span className="category">Good With Children:  </span> 
              <span className="value">{pet.kidFriendly}</span>
            </li>

            <li>
              <span className="category">Good With Other Pets:  </span>
              <span className="value">{pet.petFriendly}</span>
            </li>

            <li>
              <span className="category">Animal Description:</span>
              <br />
              <span className="value">{pet.description}</span>
            </li>

            <li>
              <span className="category">Notes on Health and Behavior:</span>
              <br />
              <span className="value">{pet.healthBehavior}</span>
            </li>

          </div>
        </ul>
      </div>
    );
  }
}

export default PetDetailView;
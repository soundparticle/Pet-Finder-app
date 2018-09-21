/* eslint-disable */
import React, { Component } from 'react';
import { addFavorite } from '../pets/actionsFavorites';
import { addWant } from '../pets/actionsWants';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { getSeeker } from '../pets/reducers';
import { getPets } from '../pets/reducersPets';
import PetTile from './PetTile';
import styles from './Slider.css';

class Slider extends Component {

  static propTypes = {
    seeker: PropTypes.object,
    pets: PropTypes.array,
    addFavorite: PropTypes.func.isRequired,
    addWant: PropTypes.func.isRequired
  }

  state = {
    slideCount: 0
  };

  nextImage = () => {
    const { slideCount } = this.state;
    this.setState({ slideCount: slideCount + 1 });
  }

  previousImage = () => {
    const { slideCount } = this.state;
    this.setState({ slideCount: slideCount - 1 });
  }

  render() { 
    const { slideCount } = this.state;
    const { addFavorite, addWant, pets } = this.props;

    return (
      <div className={styles.slider}>
        {pets.map((pet) => {
          if(pets.indexOf(pet) === slideCount) {
            return <PetTile
              key={pet._id} 
              pet={pet}
              addFavorite={addFavorite}
              addWant={addWant} 
            />;
          }
          else return null;
        })}

        <section className="buttons">
          {slideCount !== 0 
            ? <BackArrow previousImage={this.previousImage}/> 
            : ''
          }
          {slideCount !== (pets.length - 1) 
            ? <NextArrow nextImage={this.nextImage}/> 
            : ''
          } 
        </section>
        
      </div>
    );
  }
}

const BackArrow = (props) => (
  <div  

    onClick={props.previousImage} 
    style={{ fontSize: '1em', marginRight: '12px' }}
  >
    <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
  </div>
);

const NextArrow = (props) => (
  <div 
    onClick={props.nextImage} 
    style={{ fontSize: '1em', marginLeft: '12px' }}
  >
    <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
  </div>
);
 
export default connect(
  state => ({
    seeker: getSeeker(state),
    pets: getPets(state)
  }),
  { addFavorite, addWant }

)(Slider);
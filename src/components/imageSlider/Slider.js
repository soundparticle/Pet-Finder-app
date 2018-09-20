import React, { Component } from 'react';
import { addFavorite } from '../pets/actionsFavorites';
import { addWant } from '../pets/actionsWants';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { getSeeker } from '../pets/reducers';
import { getPets } from '../pets/reducersPets';
import FavoriteButton from '../controls/FavoriteButton';
import WantButton from '../controls/WantButton';
import styles from './Slider.css';

class Slider extends Component {

  static propTypes = {
    seeker: PropTypes.object,
    pets: PropTypes.array,
    addFavorite: PropTypes.func.isRequired
  }

  state = {
    images: [{ image: 1, id: 1 }, { image: 2, id: 2 }, { image: 3, id: 3 }, { image: 4, id: 4 }],
    slideCount: 0
  };

  componentDidMount() {
    // call api to fetch data
  }

  fetchPhotos() {
    // function responsible for fetching data
    // store in this.state.images
  }

  nextImage = () => {
    const { slideCount } = this.state;
    this.setState({ slideCount: slideCount + 1 });
  }

  previousImage = () => {
    const { slideCount } = this.state;
    this.setState({ slideCount: slideCount - 1 });
  }

  // handleFavorite = pet => {
  //   this.props.addFavorite(pet);
  // }


  render() { 
    const { slideCount } = this.state;
    const { addFavorite, pets } = this.props;

    return (
      <div className={styles.slider}>
        {pets.map((pet) => {
          if(pets.indexOf(pet) === slideCount) {

            return (
              <div className='petTile' key={pet._id}>
                <header>
                  <h3>{pet.name}</h3>
                </header>
                <img src={pet.images}></img>

                <section className='buttons'>
                  <FavoriteButton 
                    onComplete={addFavorite}
                    pet={pet}
                  />
                  <WantButton 
                    onComplete={addWant}
                    pet={pet}
                  />
                </section>

                <section>
                  <p>Description a loa;sdhgl;ajshdg ;lashdglha;s dg l;ajhsdgjhas;djg ajshdg ajshdg;l a;lsdgh asd ;alksdg lahsd;lgha;sdhg;ahsd;gh a;sd g</p>
                </section>
              </div>
            );
          }
          return '';
        })}

        <section>
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
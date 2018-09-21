import React, { Component } from 'react';
import styles from './Home.css';
import dogAndCat from '../../assets/images/dogAndCat.png';

class Home extends Component {
  
  render() { 
    return (
      <div className={styles.home}>
        <h2>Every pet deserves a home.</h2>
        <div className="container">
          <div className="summary">
            <p>Looking for the perfect pet for your home or need to find a home for a pet? We can help! Follow the links above and you&apos;re on your way!</p>
          </div>
          <div className="image">
            <img src={dogAndCat}  />
          </div>
        </div>  
      </div>

    );
  }
}
 
export default Home;
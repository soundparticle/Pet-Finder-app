import React, { Component } from 'react';
// import Dropzone from 'react-dropzone';
import axios from 'axios';
import styles from './Home.css';
import dogAndCat from '../../assets/images/dogAndCat.png';
// import yourImage from '../.././assets/images/white-canine.jpg';
// import background from '../.././assets/images/white-fur-texture.jpeg';

const USER_NAME = 'dsdmwoefe';
const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;
const options = 'w_300';

export const getUrl = (url, options = '') => {
  return `${FETCH_URL}/${options}${encodeURIComponent(url)}`;
};

class Home extends Component {

  state = {
    image: null,
    upload: null
  };

  handleDrop = (files) => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', 'codeinfuse, medium, gist');
      formData.append('upload_preset', 'poxg6yon'); // Replace the preset name with your own
      formData.append('api_key', '1234567'); // Replace API key with your own Cloudinary key
      formData.append('timestamp', (Date.now() / 1000) | 0);
      
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post('https://api.cloudinary.com/v1_1/dsdmwoefe/image/upload', formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then(({ data }) => {
        const fileURL = data.secure_url; // You should store this URL for future references in your app
        //console.log(fileURL);
        this.setState({ upload: fileURL });
      });
    });

    // Once all the files are uploaded 
    axios.all(uploaders)
      .then(() => {
        return getUrl(this.state.upload, options);                                                                                                          
      })
      .then(photo => this.setState({ image: photo }));

    // ... perform after upload is successful operation
  }
  
  render() { 
    // const { image } = this.state;
    return (
      <div className={styles.home}>
        {/* <h1>Home/About Page</h1> */}
        <h2>Every pet deserves a home.</h2>
        <div className="container">
          <div className="summary">
            <p>Looking for the perfect pet for your home or need to find a home for a pet? We can help! Follow the links above and you&apos;re on your way!</p>
          </div>
          <div className="image">
            <img src={dogAndCat}  />
          </div>
          
          {/* <div className={styles.container}>
            <div>
            <h4>About Us</h4>
            
            <div className={styles.info}>
            <h5>Easton</h5>
            <img src={yourImage}/>
            <p className={styles.aboutMe}>Hey! My name is Easton. slsdfsdkljflsdjfsldfj</p>
            </div>
            
            <div className={styles.info}>
            <h5>Sarah</h5>
            <img src={yourImage}/>
            <p className={styles.aboutMe}>Hey! My name is Sarah. slsdfsdkljflsdjfsldfj</p>
            
            </div>
            
            <div className={styles.info}>
            <h5>Robyn</h5>
            <img src={yourImage}/>
            <p className={styles.aboutMe}>Hey! My name is Robyn. slsdfsdkljflsdjfsldfj</p>
            </div>
            
            <div className={styles.info}>
            <h5>Antreo</h5>
            <img src={yourImage}/>
            <p className={styles.aboutMe}>Hey! My name is Antreo. slsdfsdkljflsdjfsldfj</p>
            </div>
            
            </div>
          </div> */}
        </div>  
      </div>

    );
  }
}
 
export default Home;
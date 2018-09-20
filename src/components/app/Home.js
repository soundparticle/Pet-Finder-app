import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import styles from './Home.css';
// import Slider from '../imageSlider/Slider';
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
    const { image } = this.state;
    return (
      <div className={styles.home}>
        {/* <h1>Home/About Page</h1> */}
        <h2>Welcome to Home Swap</h2>
        <div className="container">
          <div className="summary">
            <p>Looking for the perfect dog or cat for your home or need to find a home for a pet? We can help! Sign up for an account and search other users to find the perfect pet match for you or new home match for your pet! If you&apos;re looking for a new cat or dog, just fill out the form requesting details about your lifestyle and what you&apos;re looking for, and we&apos;ll find the most ideal matches for you. Its that easy!</p>
          </div>
          <div className="dropzone">
            <Dropzone 
              onDrop={this.handleDrop} 
              multiple 
              accept="image/*" 
              // style={styles.dropzone}
            >
              <p>Drop your files or click here to upload</p>
              <img src={image}/>
            </Dropzone>
          </div>
        </div>
      </div>

    );
  }
}
 
export default Home;
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import PostForm from '../forms/PostFrom';
import styles from './UploadPhoto.css';

const USER_NAME = 'dsdmwoefe';
const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;
const options = 'w_300';

export const getUrl = (url, options = '') => {
  return `${FETCH_URL}/${options}${encodeURIComponent(url)}`;
};

class UploadPhoto extends Component {

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
        this.setState({ upload: fileURL });
      });
    });

    // Once all the files are uploaded 
    axios.all(uploaders)
      .then(() => {
        return getUrl(this.state.upload, options);                                                                                                          
      })
      .then(photo => this.setState({ image: photo }));
  }

  render() { 
    return (
        
      <div className={styles.uploadPhoto}>
        <PostForm />
        <Dropzone 
          onDrop={this.handleDrop} 
          multiple 
          accept="image/*" 
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>
      </div>
    );
  }
}
 
export default UploadPhoto;
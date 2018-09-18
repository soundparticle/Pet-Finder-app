import React, { Component } from 'react';

class Slider extends Component {

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

  render() { 
    const { images, slideCount } = this.state;

    return (
      <div>
        {slideCount !== 0 
          ? <BackArrow previousImage={this.previousImage}/> 
          : ''
        }
        {images.map((photo) => {
          if(images.indexOf(photo) === slideCount) {
            return (
              <div key={photo.id}>
                <p>{photo.image}</p>
                {/* <img src=""></img> */}
                <p>Description</p>
              </div>
            );
          }
          return '';
        })}
        {slideCount !== (images.length - 1) 
          ? <NextArrow nextImage={this.nextImage}/> 
          : ''
        } 
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
 
export default Slider;
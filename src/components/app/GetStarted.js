import React, { Component } from 'react';
import styles from './GetStarted.css';
import Modal from 'react-responsive-modal';
import PetSeeker from '../forms/PetSeeker';
import PostPet from '../forms/PostPet';


class GetStarted extends Component {

  state = {
    open: false,
    open2: false
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  onOpenModel2 = () => {
    this.setState({ open2: true });
  };
 
  onCloseModel2 = () => {
    this.setState({ open2: false });
  };
  render() { 
    const { open, open2 } = this.state;
    return (
      <div className={styles.getStarted}>
        <header>
          <h2>Get Started</h2>
        </header>
        <section>
          <p>Lorem ipsum dolor amet disrupt fixie cardigan gluten-free dreamcatcher. Flannel waistcoat kombucha, affogato poke occupy meh cronut tilde quinoa narwhal. Pitchfork viral hoodie ramps. Gochujang VHS banjo, succulents venmo cliche craft beer kinfolk cornhole subway tile vexillologist letterpress affogato. Bicycle rights skateboard letterpress, fanny pack raw denim etsy raclette blog.</p>
          <button onClick={this.onOpenModal}>Find a pet</button>
          <Modal classNames={styles} open={open} onClose={this.onCloseModal} center={false} animationDuration={100} showCloseIcon={false}>
            <PetSeeker/>
          </Modal>
        </section>

        <section>
          <p>Lorem ipsum dolor amet disrupt fixie cardigan gluten-free dreamcatcher. Flannel waistcoat kombucha, affogato poke occupy meh cronut tilde quinoa narwhal. Pitchfork viral hoodie ramps. Gochujang VHS banjo, succulents venmo cliche craft beer kinfolk cornhole subway tile vexillologist letterpress affogato. Bicycle rights skateboard letterpress, fanny pack raw denim etsy raclette blog.</p>
          <button onClick={this.onOpenModel2}>Post a pet</button>
          <Modal classNames={styles} open={open2} onClose={this.onCloseModel2} center={false} animationDuration={100} showCloseIcon={false}>
            <PostPet/>
          </Modal>
        </section>
      </div>
    );
  }
}
 
export default GetStarted;
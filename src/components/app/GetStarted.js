import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './GetStarted.css';
import Modal from 'react-responsive-modal';
import PetSeeker from '../forms/PetSeeker';
import PostForm from '../forms/PostForm';
import { addSeeker } from '../pets/actions';
import { addPet } from '../pets/actionsPets';


class GetStarted extends Component {

  state = {
    open: false,
    open2: false
  };

  static propTypes = {
    addSeeker: PropTypes.func.isRequired,
    addPet: PropTypes.func.isRequired
  }
 
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
    const { addSeeker, addPet } = this.props;
    return (
      <div className={styles.getStarted}>
        <header>
          <h2>Get Started</h2>
        </header>
        <section>
          <p> If you&apos;re looking for a new cat or dog, just fill out the form requesting details about your lifestyle and what you&apos;re looking for, and we&apos;ll find the most ideal matches for you. Its that easy!</p>
          <button onClick={this.onOpenModal}>Find a pet</button>
          <Modal classNames={styles} open={open} onClose={this.onCloseModal} center={false} animationDuration={100} showCloseIcon={false}>
            <PetSeeker onComplete={addSeeker}/>
          </Modal>
        </section>

        <section>
          <p>Needing a new home for your pet? Post you pet info here! We hope you&apos;ll find a great fit. </p>
          <button onClick={this.onOpenModel2}>Post a pet</button>
          <Modal classNames={styles} open={open2} onClose={this.onCloseModel2} center={false} animationDuration={100} showCloseIcon={false}>
            <PostForm onComplete={addPet}/>
          </Modal>
        </section>
      </div>
    );
  }
}
 
export default connect(
  null,
  { addSeeker, addPet }

)(GetStarted);
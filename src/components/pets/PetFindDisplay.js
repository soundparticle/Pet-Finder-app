import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import PetFilter from '../forms/PetFilter';
import styles from './PetFindDisplay.css';


class PetFindDisplay extends Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <h2>Find a pet</h2>
        <button onClick={this.onOpenModal}>Filter</button>
        <Modal classNames={styles} open={open} onClose={this.onCloseModal} center={false} animationDuration={100} showCloseIcon={false}>
          <PetFilter/>
        </Modal>
      </div>
    );
  }
}
 
export default PetFindDisplay;
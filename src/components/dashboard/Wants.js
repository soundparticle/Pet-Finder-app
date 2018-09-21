// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { load } from '../pets/actions';
// import { loadPet } from '../pets/actionsPets';
// import { getSeeker } from '../pets/reducers';
// import { getPets } from '../pets/reducersPets';
// import WantPetItem from '../pets/WantPetItem';


// class Wants extends Component {
//   state = {
//     wantPets: []
//   }

//   static propTypes = {
//     wants: PropTypes.array,
//     load: PropTypes.func.isRequired,
//     loadPet: PropTypes.func.isRequired,
//     pets: PropTypes.array
//   }

//   componentDidMount() { 
//     this.setState({ wantPets: this.props.pets.filter(pet => this.props.wants.some(id => pet._id === id)) });
//   }
//   render() {
    
//     const { wants } = this.props;
//     const { wantPets } = this.state;

//     return (
//       <section>
//         <h3>Wants Component</h3>
//         {wants && <ul>
//           {wantPets.map(want => {
//             return <WantPetItem key={want._id} fav={want}/>;
//           })}
//         </ul>
//         }
//       </section> 
//     );
//   }
// }
 
// export default connect(
//   state => ({
//     wants: getSeeker(state).wants,
//     pets: getPets(state)
//   }),
//   { load, loadPet }
)(Wants);
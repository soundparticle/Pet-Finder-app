// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { load } from '../pets/actions';
// import { loadPetsByOwner } from '../pets/actionsPets';
// import { getSeeker } from '../pets/reducers';
// import { getPets } from '../pets/reducersPets';
// import WantPetItem from './WantPetItem';


// class Wants extends Component {
//   state = {
//     wantPets: []
//   }

// static propTypes = {
//   wants: PropTypes.array,
//   load: PropTypes.func.isRequired,
//   loadPetsByOwner: PropTypes.func.isRequired,
//   pets: PropTypes.array
// }

// componentDidMount() { 
//   this.setState({ wantPets: this.props.pets.filter(pet => this.props.wants.some(id => pet._id === id)) });
// }
//   render() {
    
//     const { wantPets } = this.state;

//     return (
//       <section>
//         <h3>Wants Component</h3>
//         {wantPets && <ul>
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
//     wants: getSeeker(state).interested,
//     pets: getPets(state)
//   }),
//   null
// )(Wants);

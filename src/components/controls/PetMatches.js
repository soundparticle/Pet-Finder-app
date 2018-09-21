// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Wants from '../dashboard/Wants';
// import { pets } from '../pets/reducersPets';



// class PetMatches extends Component {

//   state = {
//     wants: null
//   }
//   componentDidMount() {
//     getWants()
//       .then(wants => {
//         this.setState({ wants });
//       })
//       .catch(console.log);
//   }
//   render() {
//     const { wants } = this.stat;
//     if(!wants) return null;


//     return(
//       <div>
//         {petMatches.map(wants => {
//           return <Want key={pet.id} pet={want}/>;
//         })}
//       </div>

//     )
//   }
// }

// export default PetMatches;
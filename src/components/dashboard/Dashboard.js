import React, { Component } from 'react';
import Favorites from './Favorites';
import Wants from './Wants';

class Dashboard extends Component {
  
  render() { 
    return ( 
      <div>
        <h3>Dashboard</h3>
        <Favorites />
        <Wants />

      </div>
    );
  }
}
 
export default Dashboard;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initAuth } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Auth from '../auth/Auth';

class App extends PureComponent {

  static propTypes = {
    initAuth: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool
  }

  componentDidMount() {
    this.props.initAuth();
  }

  render() {
    // const { checkedAuth } = this.props;
    
    return (
      <div>
        <h1>Hello Team Cookie!</h1>
        <Auth />
      </div>

    );
  }
}

export default connect (
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { initAuth }
)(App);

import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getCheckedAuth } from '../auth/reducers';
import { tryLoadUser } from '../auth/actions';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Auth from '../auth/Auth';
import PetDashboard from '../pets/PetDashboard';
import PostPet from '../forms/PostPet';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  }
  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {

    const { checkedAuth } = this.props;
    
    return (
      <Router>

        <div>
          <header>
            <h1>Header Component Lives Here</h1>
          </header>

          <main>
            { checkedAuth &&
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <PrivateRoute exact path="/pets" component={PetDashboard}/>
                <PrivateRoute exact path="/post" component={PostPet}/>
                <Redirect to="/"/>
              </Switch>
            }
          </main>

          <footer>
            <h5>Footer lives here</h5>
          </footer>
        </div>
      </Router>
    );
  }
}
export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);

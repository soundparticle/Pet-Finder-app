import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getCheckedAuth } from '../auth/reducers';
import { tryLoadUser } from '../auth/actions';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Auth from '../auth/Auth';
import PetDashboard from '../pets/PetDashboard';
import PostPet from '../forms/PostPet';
import PetSeeker from '../forms/PetSeeker';
import GetStarted from './GetStarted';

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
          <Header/>
          <main>
            { checkedAuth &&
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <PrivateRoute exact path="/find" component={PetDashboard}/>
                <PrivateRoute exact path="/post" component={PostPet}/>
                <PrivateRoute exact path="/seek" component={PetSeeker}/>
                <PrivateRoute exact path="/get-started" component={GetStarted}/>
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

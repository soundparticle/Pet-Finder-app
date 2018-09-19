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
import ListAPet from '../pets/ListAPet';
import PetSeeker from '../forms/PetSeeker';
import GetStarted from './GetStarted';
// import PetFindDisplay from '../pets/PetFindDisplay';

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

        <div className="app-container">
          <Header/>
          <main>
            { checkedAuth &&
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <PrivateRoute exact path="/dashboard" component={PetDashboard}/>
                <PrivateRoute exact path="/find" component={PetDashboard}/>
                <PrivateRoute exact path="/post" component={ListAPet}/>
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

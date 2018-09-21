import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getCheckedAuth } from '../auth/reducers';
import { tryLoadUser } from '../auth/actions';
import Header from './Header';
import Footer from './Footer';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Auth from '../auth/Auth';
import PetDashboard from '../pets/PetDashboard';
import ListAPet from '../pets/ListAPet';
import PetSeeker from '../forms/PetSeeker';
import GetStarted from './GetStarted';
import Dashboard from '../dashboard/Dashboard';
import mainImage from '../../assets/images/pets-header-trimmed.png';

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
            <img className="main-image" src={mainImage}/>
            <div className="switch">
              { checkedAuth &&
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/auth" component={Auth}/>
                  <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                  <PrivateRoute exact path="/find" component={PetDashboard}/>
                  <PrivateRoute exact path="/post" component={ListAPet}/>
                  <PrivateRoute exact path="/seek" component={PetSeeker}/>
                  <PrivateRoute exact path="/get-started" component={GetStarted}/>
                  <Redirect to="/"/>
                </Switch>
              }

            </div>
          </main>

          <Footer/>
        </div>
      </Router>
    );
  }
}
export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);

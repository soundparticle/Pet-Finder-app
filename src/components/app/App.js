import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../auth/Auth';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getCheckedAuth } from '../auth/reducers';
import { tryLoadUser } from '../auth/actions';

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
          <h1>Hello Team Cookie!</h1>
          <main>
            { checkedAuth &&
              <Switch>
                <Route path="/auth" component={Auth}/>
                <Redirect to="/"/>
              </Switch>
            }
          </main>
        </div>
      </Router>
    );
  }
}
export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);

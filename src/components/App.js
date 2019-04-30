import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getClientsThunk } from '../store/index';
import LandingView from './LandingView';
import ClientItemView from './ClientItemView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path={'/'}
          render={() => <LandingView clients={this.props.clients} />}
        />
        <Route
          path={'/client/:id'}
          render={props => (
            <ClientItemView {...props} clients={this.props.clients} />
          )}
        />
      </div>
    );
  }
}

const mapState = state => ({
  clients: state
});

const mapDispatch = dispatch => {
  dispatch(getClientsThunk());
  return {};
};

export default connect(
  mapState,
  mapDispatch
)(App);

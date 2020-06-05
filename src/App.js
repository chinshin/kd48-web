import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, ownProps) => {
  return {
    test: { ...state, ...ownProps },
  };
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch, ownProps) => {
  const { test } = ownProps || {};
  return {
    test,
    // increase: (...args) => dispatch(actions.increase(...args)),
    // decrease: (...args) => dispatch(actions.decrease(...args)),
  };
};

// eslint-disable-next-line arrow-body-style
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  // TODO
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import CommonHeaderContainer from './container/CommonHeaderContainer';
import CommonContent from './components/CommonContent';

const App = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { t } = props;
  return (
    <div className="kd48-web-container">
      <CommonHeaderContainer />
      <div className="kd48-web-content">
        <CommonContent />
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(withTranslation()(App));

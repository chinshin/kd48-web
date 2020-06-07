import { connect } from 'react-redux';

import CommonHeader from '../components/CommonHeader';

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CommonHeader);

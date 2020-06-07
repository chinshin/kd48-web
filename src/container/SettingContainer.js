/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';

import SettingPage from '../components/SettingPage';
import SettingsActions from '../actions/SettingsActions';

const mapStateToProps = (state) => {
  const { SettingsReducer: { settings } = {} } = state;
  if (settings) {
    return {
      appLoading: false,
      ...settings,
    };
  }
  return {
    appLoading: true,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKd48Token:
      (mobile, passowrd) => dispatch(SettingsActions.fetchKd48Token(mobile, passowrd)),
    updateSettings:
      (newSettings) => dispatch(SettingsActions.updateSettings(newSettings)),
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SettingPage);

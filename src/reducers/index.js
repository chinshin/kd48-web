import { combineReducers } from 'redux';

import PageReducer from './PageReducer';
import SettingsReducer from './SettingsReducer';


const kd48Reducer = combineReducers({
  PageReducer,
  SettingsReducer,
});

export default kd48Reducer;

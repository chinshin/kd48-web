import ActionTypes from '../actions/ActionTypes';

const initialState = {
  settings: {
    idol: {},
    user: {},
  },
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SETTINGS: {
      const { newSettings } = action.payload;
      return { ...state, settings: newSettings };
    }
    case ActionTypes.UPDATE_KD_TOKEN: {
      const { token } = action.payload;
      const newSettings = {
        ...state.settings,
        user: {
          ...state.settings.user,
          token,
        },
      };
      return { ...state, settings: newSettings };
    }
    case ActionTypes.REQUEST_KD_TOKEN_IN_PROGRESS: {
      const { flag } = action.payload;
      const newSettings = {
        ...state.settings,
        user: {
          ...state.settings.user,
          requestKdTokenInProgress: flag,
        },
      };
      return { ...state, settings: newSettings };
    }
    case ActionTypes.REQUEST_KD_TOKEN_ERROR: {
      const { e } = action.payload;
      const newSettings = {
        ...state.settings,
        user: {
          ...state.settings.user,
          requestKdTokenError: e,
        },
      };
      return { ...state, settings: newSettings };
    }
    default: return state;
  }
};

export default settingsReducer;

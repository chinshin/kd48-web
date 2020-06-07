import fetchJson from 'fetch-json';
import ActionTypes from './ActionTypes';


const updateSettings = (newSettings) => (
  {
    type: ActionTypes.UPDATE_SETTINGS,
    payload: { newSettings },
  }
);

const fetchKd48TokenAPI = (mobile, password) => {
  const resources = {
    mobile,
    pwd: password,
  };
  const options = {
    method: 'POST',
  };
  return fetchJson.post('/api/user/fetchToken', resources, options);
};

const requestKdTokenInProgress = (flag) => (
  {
    type: ActionTypes.REQUEST_KD_TOKEN_IN_PROGRESS,
    payload: { flag },
  }
);

const requestKdTokenError = (e) => (
  {
    type: ActionTypes.REQUEST_KD_TOKEN_ERROR,
    payload: { e },
  }
);

const updateKdToken = (token) => (
  {
    type: ActionTypes.UPDATE_KD_TOKEN,
    payload: { token },
  }
);

const fetchKd48Token = (mobile, password) => (dispatch) => {
  dispatch(requestKdTokenInProgress(true));
  return fetchKd48TokenAPI(mobile, password)
    .then((data) => {
      const { token } = data;
      dispatch(requestKdTokenInProgress(false));
      dispatch(updateKdToken(token));
    })
    .catch((e) => {
      dispatch(requestKdTokenInProgress(false));
      dispatch(requestKdTokenError(e));
    });
};

export default {
  updateSettings,
  fetchKd48Token,
};

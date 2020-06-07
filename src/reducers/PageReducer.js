const initialState = {
  page: {},
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_ACTION': {
      return { ...state };
    }
    default: return state;
  }
};

export default pageReducer;

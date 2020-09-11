const programsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROGRAM':
      return action.payload;
    case 'UNSET_PROGRAM':
      return [];
    default:
      return state;
  }
};

export default programsReducer;

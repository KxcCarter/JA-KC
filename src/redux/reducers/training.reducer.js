const trainingReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LEARNING_MATERIAL':
      return action.payload;
    case 'UNSET_LEARNING_MATERIAL':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default trainingReducer;

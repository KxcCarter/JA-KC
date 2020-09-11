import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
<<<<<<< HEAD
import programs from './programs.reducer';
=======
import learning_material from './training.reducer';
<<<<<<< HEAD
>>>>>>> develop
=======
import volunteerScheduledClasses from './volunteerScheduledClasses.reducer';
import volunteerLearningMaterial from './volunteerLearningMaterial.reducer';
import volunteerSingleClassDetails from './volunteerSingleClassDetails.reducer';
>>>>>>> develop

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
<<<<<<< HEAD
  programs, // will have all programs
=======
  learning_material, //will show all learning materials
<<<<<<< HEAD
>>>>>>> develop
=======
  volunteerScheduledClasses,
  volunteerLearningMaterial,
  volunteerSingleClassDetails,
>>>>>>> develop
});

export default rootReducer;

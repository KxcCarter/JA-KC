import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import report_form from './report-form.reducer';
import learning_material from './training.reducer';
import volunteerScheduledClasses from './volunteerScheduledClasses.reducer';
import volunteerLearningMaterial from './volunteerLearningMaterial.reducer';
import volunteerSingleClassDetails from './volunteerSingleClassDetails.reducer';
import completedCounter from './completedcounter.reducer';
import progressCounter from './inprogresscounter.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  report_form, //will have all scheduled_classes information
  learning_material, //will show all learning materials
  volunteerScheduledClasses,
  volunteerLearningMaterial,
  volunteerSingleClassDetails,
  completedCounter,
  progressCounter,
});

export default rootReducer;

import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import volunteerList from './volunteerlist.saga';
import deleteVolunteer from './deletevolunteer.saga';
import editVolunteer from './editvolunteer.saga';
import getReportSaga from './getreport.saga';
import reportFormSaga from './report-form.saga';
import deleteReportSaga from './deletereport.saga';
import editReportSaga from './editreport.saga';
import programSaga from './programs.saga';
import editprogramSaga from './editprograms.saga';
import deleteprogramSaga from './deleteprogram.saga';
import deleteProgramSaga from './deleteprogram.saga';
import volunteerGetClassListSaga from './volunteerGetClassList.saga';
import volunteerCompleteClassSaga from './volunteerCompleteClass.saga';
import volunteerGetLearningMaterialSaga from './volunteerGetLearningMaterial.saga';
import volunteerGetClassDetailsSaga from './volunteerGetSingleClassDetails.saga';
import completedCounterSaga from './completedcounter.saga';
import inProgressSaga from './inprogresscounter.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    volunteerList(), //contains only users that are volunteers
    deleteVolunteer(),
    editVolunteer(),
    getReportSaga(),
    reportFormSaga(),
    deleteReportSaga(),
    editReportSaga(),
    programSaga(),
    editprogramSaga(),
    deleteProgramSaga(),
    volunteerGetClassListSaga(),
    volunteerCompleteClassSaga(),
    volunteerGetLearningMaterialSaga(),
    volunteerGetClassDetailsSaga(),
    completedCounterSaga(),
    inProgressSaga(),
  ]);
}

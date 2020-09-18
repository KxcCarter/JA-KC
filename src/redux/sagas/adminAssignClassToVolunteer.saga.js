import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* adminAssignClassToVolunteer(action) {
  try {
    const response = yield axios.post('/api/volunteer/newScheduledClass');
    yield put({ type: 'TALK_TO_REDUCER', payload: response.data });
  } catch (error) {
    console.log('Error message: ', error);
  }
}
function* adminAssignClassToVolunteerSaga() {
  yield takeLatest('ASSIGN_VOLUNTEER_CLASS', adminAssignClassToVolunteer);
}
export default adminAssignClassToVolunteerSaga;

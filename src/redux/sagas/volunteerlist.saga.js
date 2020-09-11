import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchVolunteers() {
  try {
    const response = yield axios.get('/api/volunteerlist');
    yield put({ type: 'SET_VOLUNTEERS', payload: response.data });
  } catch (error) {
    console.log('Volunteer list get request failed', error);
  }
}

function* volunteerlistSaga() {
  yield takeLatest('FETCH_VOLUNTEERS', fetchVolunteers);
}

export default volunteerlistSaga;

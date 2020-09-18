import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAmin() {
  try {
    const response = yield axios.get('/api/user/adminlist');
    yield put({ type: 'SET_ADMIN', payload: response.data });
  } catch (error) {
    console.log('Admin get request failed', error);
  }
}

function* adminSaga() {
  yield takeLatest('FETCH_ADMIN', fetchAdmin);
}

export default adminSaga;

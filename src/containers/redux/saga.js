import { call, put, takeLatest } from 'redux-saga/effects';

import {
  createUserSuccess,
  createUserFailure,
  fetchUsersSuccess,
  fetchUsersFailure
} from './actions';

import { FETCH_USERS, CREATE_USER } from './constants';

import { createUser, fetchUsers } from './service';

import { mapUsersResponse } from './mappers';

function* createUserSaga(user) {
  try {
    yield call(createUser, user);
    yield put(createUserSuccess());
  } catch (_) {
    yield put(createUserFailure());
  }
}

function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsers);
    const responseData = yield call([response, response.json]);
    const users = mapUsersResponse(responseData.data);
    yield put(fetchUsersSuccess(users));
  } catch (_) {
    yield put(fetchUsersFailure());
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_USERS, fetchUsersSaga);
  yield takeLatest(CREATE_USER, createUserSaga);
}

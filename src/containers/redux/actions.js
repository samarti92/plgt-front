import {
  FETCH_USERS,
  CREATE_USER,
  FETCH_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USER_FAILURE
} from './constants';

export function fetchUsers() {
  return {
    type: FETCH_USERS
  };
}
export function createUser(user) {
  return { type: CREATE_USER, user };
}

export function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS
  };
}
export function createUserFailure() {
  return {
    type: CREATE_USER_FAILURE
  };
}
export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}
export function fetchUsersFailure() {
  return {
    type: FETCH_USERS_FAILURE
  };
}

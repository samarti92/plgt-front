import {
  FETCH_USERS,
  CREATE_USER,
  FETCH_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USER_FAILURE
} from './constants';

export const initialState = {
  users: [],
  newUser: {},
  errorFetchingUsers: '',
  errorCreatingUser: '',
  waitingFetchUsers: false,
  waitingCreateUser: false
};

const createUser = (state, user) => ({
  ...state,
  newUser: user,
  waitingCreateUser: true,
  errorCreatingUser: ''
});

const createUserSuccess = state => ({
  ...state,
  newUser: {},
  waitingCreateUser: false,
  errorCreatingUser: ''
});

const createUserFailure = (state, user) => ({
  ...state,
  newUser: user,
  waitingCreateUser: false,
  errorCreatingUser: 'Ocurrió un error creando el usuario'
});

const fetchUsers = state => ({
  ...state,
  users: [],
  waitingFetchUsers: true,
  errorFetchingUsers: ''
});

const fetchUsersSuccess = (state, users) => ({
  ...state,
  users,
  waitingFetchUsers: false,
  errorFetchingUsers: ''
});

const fetchUsersFailure = (state, user) => ({
  ...state,
  waitingFetchUsers: false,
  errorFetchingUsers: 'Ocurrió un error obteniendo los usuarios'
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return fetchUsers(state);
    case CREATE_USER:
      return createUser(action.user);
    case FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action.users);
    case CREATE_USER_SUCCESS:
      return createUserSuccess(state);
    case FETCH_USERS_FAILURE:
      return fetchUsersFailure(state);
    case CREATE_USER_FAILURE:
      return createUserFailure(state);
    default:
      return state;
  }
}

export default usersReducer;

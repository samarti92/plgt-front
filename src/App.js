import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './App.css';

import UserList from './containers/UserList';
import UserForm from './containers/UserForm';
import usersReducer from './containers/redux/reducer';
import usersSaga from './containers/redux/saga';
import { AppWrapper } from './styles';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(usersReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(usersSaga);

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <UserList />
        <UserForm />
      </AppWrapper>
    </Provider>
  );
}

export default App;

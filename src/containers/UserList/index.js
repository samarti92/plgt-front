import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import { Title, Wrapper } from './styles';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

import List from '../../components/List';

const UserList = () => {
  const users = useSelector(state => state.users);
  const waitingFetchUsers = useSelector(state => state.waitingFetchUsers);
  const errorFetchingUsers = useSelector(state => state.errorFetchingUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, users);

  return (
    <Wrapper className="col-md-6 col-12 container pt-5 card card-body">
      <Title>Listado</Title>
      {errorFetchingUsers && <Error text={errorFetchingUsers} />}
      {waitingFetchUsers && <Spinner />}
      {!waitingFetchUsers && <List items={users} />}
    </Wrapper>
  );
};

export default UserList;

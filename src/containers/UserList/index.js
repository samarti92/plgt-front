import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import { Title, Wrapper } from './styles';

import List from '../../components/List';

const UserList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <Wrapper className="col-md-6 col-12 container pt-5 card card-body">
      <Title>Listado</Title>
      <List items={users} />
    </Wrapper>
  );
};

export default UserList;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/actions';
import PropTypes from 'prop-types';

import { Wrapper, Title } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export const UserForm = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newCity, setNewCity] = useState('');
  const dispatch = useDispatch();

  const waitingCreateUser = useSelector(state => state.waitingCreateUser);
  const newUser = useSelector(state => state.newUser);
  const errorCreatingUser = useSelector(state => state.errorCreatingUser);

  const beforeCreateUser = () => {
    const user = {
      email: newEmail,
      city: newCity
    };
    dispatch(createUser(user));
  };

  useEffect(() => {
    setNewCity('');
    setNewEmail('');
  }, newUser);

  return (
    <Wrapper className="col-md-6 col-12 container pt-5 card card-body">
      <Title>Formulario</Title>
      {errorCreatingUser && <Error text={errorCreatingUser} />}
      {waitingCreateUser && <Spinner />}
      {!waitingCreateUser && (
        <React.Fragment>
          <Input
            onChange={e => setNewEmail(e.target.value)}
            value={newEmail}
            id="email"
            label="email"
          />
          <Input
            onChange={e => setNewCity(e.target.value)}
            value={newCity}
            id="city"
            label="city"
          />
          <Button className="btn btn-primary" onClick={beforeCreateUser} />
        </React.Fragment>
      )}
    </Wrapper>
  );
};

UserForm.propTypes = {
  users: PropTypes.array
};

UserForm.defaultProps = {
  users: []
};

export default UserForm;

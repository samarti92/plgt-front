import React from 'react';
import PropTypes from 'prop-types';

import { Input as StyledInput, Wrapper, Label } from './styles';

const Input = ({ onChange, label, value, id }) => (
  <Wrapper className="form-group text-left">
    <Label htmlFor={id}>{label}</Label>
    <StyledInput
      className="form-control mb-1"
      value={value}
      id={id}
      onChange={onChange}
    />
  </Wrapper>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

Input.defaultProps = {
  onChange: () => alert('Missing onChange definition'),
  label: 'Missing label',
  id: 'Missing id'
};

export default Input;

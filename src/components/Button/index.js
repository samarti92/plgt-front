import React from 'react';
import PropTypes from 'prop-types';

import { Button as StyledButton } from './styles';

const Button = ({ onClick }) => (
  <StyledButton className="btn btn-primary" onClick={onClick}>
    Submit
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  onClick: () => alert('Missing onClick definition')
};

export default Button;

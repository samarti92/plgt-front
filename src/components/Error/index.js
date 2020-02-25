import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ text }) => (
  <div class="alert alert-danger" role="alert">
    {text}
  </div>
);

Error.propTypes = {
  id: PropTypes.string.isRequired
};

Error.defaultProps = {
  id: 'Missing error text'
};

export default Error;

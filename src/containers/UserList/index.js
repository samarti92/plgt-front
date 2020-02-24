import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/List';

const UserList = ({ items }) => <List items={items} />;

UserList.propTypes = {
  items: PropTypes.array
};

UserList.defaultProps = {
  items: []
};

export default UserList;
